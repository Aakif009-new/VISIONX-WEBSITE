import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export class AdminAuthService {
  async login(email: string, password: string) {
    const user = await prisma.admin_users.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid email or password");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid email or password");

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET || "fallback",
      { expiresIn: "7d" }
    );

    return {
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }

  async getProfile(id: string) {
    const user = await prisma.admin_users.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }
}

export const adminAuthService = new AdminAuthService();

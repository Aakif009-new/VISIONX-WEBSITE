import jwt from "jsonwebtoken";
import prisma from "./prisma";

const JWT_SECRET = process.env.JWT_SECRET || "visionx-cms-jwt-secret-key-2026";

export interface JwtPayload {
  id: string;
  email: string;
  role: string;
  name: string;
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

export async function authenticate(req: Request): Promise<JwtPayload> {
  const auth = req.headers.get("authorization");
  if (!auth) throw new Error("Authentication required");
  const token = auth.replace("Bearer ", "");
  const decoded = verifyToken(token);
  const user = await prisma.admin_users.findUnique({
    where: { id: decoded.id },
    select: { id: true, email: true, name: true, role: true },
  });
  if (!user) throw new Error("User not found");
  return user;
}

export function requireRole(user: JwtPayload, ...roles: string[]) {
  if (roles.length > 0 && !roles.includes(user.role) && user.role !== "super_admin") {
    throw new Error("Insufficient permissions");
  }
}

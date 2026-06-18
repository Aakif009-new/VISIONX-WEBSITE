import type { Request, Response, NextFunction } from "express";
import prisma from "../config/database";
import jwt from "jsonwebtoken";

export async function adminAuth(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) throw new Error("Authentication required");

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback"
    ) as { id: string; role: string };
    const user = await prisma.admin_users.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, name: true, role: true },
    });
    if (!user) throw new Error("User not found");

    (req as any).user = user;
    next();
  } catch {
    _res.status(401).json({ success: false, message: "Authentication required" });
  }
}

export function requireRole(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ success: false, message: "Authentication required" });
      return;
    }
    if (roles.length > 0 && !roles.includes(user.role) && user.role !== "super_admin") {
      res.status(403).json({ success: false, message: "Insufficient permissions" });
      return;
    }
    next();
  };
}

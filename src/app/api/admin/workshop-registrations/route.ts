import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user, "super_admin");
    const registrations = await prisma.workshop_registrations.findMany({
      orderBy: { created_at: "desc" },
      include: { workshop: { select: { title: true } } },
    });
    return NextResponse.json({ success: true, data: registrations });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

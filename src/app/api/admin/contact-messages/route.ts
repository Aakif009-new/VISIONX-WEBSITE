import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user, "super_admin");
    const messages = await prisma.contact_messages.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ success: true, data: messages });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authenticate(req);
    requireRole(user, "super_admin");
    const { id } = await params;
    const body = await req.json();
    const application = await prisma.incubation_applications.update({
      where: { id },
      data: { status: body.status },
    });
    return NextResponse.json({ success: true, data: application });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

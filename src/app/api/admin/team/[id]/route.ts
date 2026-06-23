import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminTeamService } from "@/lib/services";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authenticate(req);
    requireRole(user, "team_admin");
    const { id } = await params;
    const body = await req.json();
    const member = await adminTeamService.update(id, body);
    return NextResponse.json({ success: true, data: member });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authenticate(req);
    requireRole(user, "super_admin");
    const { id } = await params;
    await adminTeamService.remove(id);
    return NextResponse.json({ success: true, message: "Team member deleted" });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

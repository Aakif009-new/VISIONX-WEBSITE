import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminTeamService } from "@/lib/services";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user);
    const members = await adminTeamService.getAll();
    return NextResponse.json({ success: true, data: members });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await authenticate(req);
    requireRole(user, "team_admin");
    const body = await req.json();
    const member = await adminTeamService.create(body);
    return NextResponse.json({ success: true, data: member }, { status: 201 });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

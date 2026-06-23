import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { workshopService } from "@/lib/services";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user);
    const workshops = await workshopService.getAll();
    return NextResponse.json({ success: true, data: workshops });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await authenticate(req);
    requireRole(user, "event_admin");
    const body = await req.json();
    const workshop = await workshopService.create(body);
    return NextResponse.json({ success: true, data: workshop }, { status: 201 });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

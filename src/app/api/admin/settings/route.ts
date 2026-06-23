import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminSettingsService } from "@/lib/services";

export async function GET() {
  try {
    const settings = await adminSettingsService.getAll();
    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await authenticate(req);
    requireRole(user, "super_admin");
    const body = await req.json();
    const setting = await adminSettingsService.upsert(body.key, body.value);
    return NextResponse.json({ success: true, data: setting });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

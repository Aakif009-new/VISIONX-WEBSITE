import { NextRequest, NextResponse } from "next/server";
import { adminAuthService } from "@/lib/services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await adminAuthService.login(body.email, body.password);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Login failed" },
      { status: 401 }
    );
  }
}

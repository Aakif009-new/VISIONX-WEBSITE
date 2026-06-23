import { NextResponse } from "next/server";
import { authenticate } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Authentication required" },
      { status: 401 }
    );
  }
}

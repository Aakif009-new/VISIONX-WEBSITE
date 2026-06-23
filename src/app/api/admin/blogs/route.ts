import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminBlogService } from "@/lib/services";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user);
    const url = new URL(req.url);
    const status = url.searchParams.get("status") || undefined;
    const posts = await adminBlogService.getAll(status);
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await authenticate(req);
    requireRole(user, "content_admin");
    const body = await req.json();
    const post = await adminBlogService.create(body);
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

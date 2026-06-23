import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminBlogService } from "@/lib/services";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authenticate(req);
    requireRole(user);
    const { id } = await params;
    const post = await adminBlogService.getById(id);
    return NextResponse.json({ success: true, data: post });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authenticate(req);
    requireRole(user, "content_admin");
    const { id } = await params;
    const body = await req.json();
    const post = await adminBlogService.update(id, body);
    return NextResponse.json({ success: true, data: post });
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
    await adminBlogService.remove(id);
    return NextResponse.json({ success: true, message: "Blog post deleted" });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

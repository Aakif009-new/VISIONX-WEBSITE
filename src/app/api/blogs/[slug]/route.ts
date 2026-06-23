import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await prisma.blog_posts.findUnique({ where: { slug } });
  if (!post || post.status !== "published") {
    return NextResponse.json(
      { success: false, message: "Blog post not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true, data: post });
}

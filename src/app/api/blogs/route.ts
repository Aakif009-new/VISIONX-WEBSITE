import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.blog_posts.findMany({
    where: { status: "published" },
    orderBy: { created_at: "desc" },
  });
  return NextResponse.json({ success: true, data: posts });
}

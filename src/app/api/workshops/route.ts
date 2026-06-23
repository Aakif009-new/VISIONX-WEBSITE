import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const workshops = await prisma.workshops.findMany({
    orderBy: { created_at: "desc" },
  });
  return NextResponse.json({ success: true, data: workshops });
}

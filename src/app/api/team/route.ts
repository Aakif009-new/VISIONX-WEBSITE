import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const members = await prisma.team_members.findMany({
    orderBy: [{ council: "desc" }, { display_order: "asc" }, { name: "asc" }],
  });
  return NextResponse.json({ success: true, data: members });
}

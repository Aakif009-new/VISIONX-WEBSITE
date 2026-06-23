import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const workshop = await prisma.workshops.findUnique({
    where: { id },
    include: { registrations: true },
  });
  if (!workshop) {
    return NextResponse.json(
      { success: false, message: "Workshop not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true, data: workshop });
}

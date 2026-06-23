import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createContactSchema } from "@/lib/validations";
import { googleSheetsService } from "@/lib/services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createContactSchema.parse(body);
    const message = await prisma.contact_messages.create({ data });

    googleSheetsService.addContactMessage({
      id: message.id,
      name: message.name,
      email: message.email,
      message: message.message,
      created_at: message.created_at,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully", data: message },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.issues) {
      return NextResponse.json(
        { success: false, message: "Validation error", error: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

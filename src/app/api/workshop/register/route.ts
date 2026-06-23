import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createRegistrationSchema } from "@/lib/validations";
import { googleSheetsService } from "@/lib/services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createRegistrationSchema.parse(body);

    const workshop = await prisma.workshops.findUnique({
      where: { id: data.workshop_id },
    });
    if (!workshop) {
      return NextResponse.json(
        { success: false, message: "Workshop not found" },
        { status: 404 }
      );
    }
    if (!workshop.registration_open) {
      return NextResponse.json(
        { success: false, message: "Registration is closed for this workshop" },
        { status: 400 }
      );
    }
    if (workshop.max_seats) {
      const count = await prisma.workshop_registrations.count({
        where: { workshop_id: data.workshop_id },
      });
      if (count >= workshop.max_seats) {
        return NextResponse.json(
          { success: false, message: "Workshop is fully booked" },
          { status: 400 }
        );
      }
    }

    const registration = await prisma.workshop_registrations.create({ data });

    googleSheetsService.addWorkshopRegistration({
      id: registration.id,
      full_name: registration.full_name,
      email: registration.email,
      phone: registration.phone,
      college_name: registration.college_name,
      department: registration.department,
      year_of_study: registration.year_of_study,
      workshop_name: workshop.title,
      created_at: registration.created_at,
    });

    return NextResponse.json(
      { success: true, message: "Registration successful", data: registration },
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

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createMemberApplicationSchema } from "@/lib/validations";
import { googleSheetsService } from "@/lib/services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createMemberApplicationSchema.parse(body);
    const application = await prisma.visionx_member_applications.create({
      data: { ...data, status: "Pending" },
    });

    googleSheetsService.addMemberApplication({
      id: application.id,
      full_name: application.full_name,
      college_name: application.college_name,
      department: application.department,
      year_of_study: application.year_of_study,
      role_interested: application.role_interested,
      why_join: application.why_join,
      relevant_experience: application.relevant_experience,
      status: application.status,
      created_at: application.created_at,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully", data: application },
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

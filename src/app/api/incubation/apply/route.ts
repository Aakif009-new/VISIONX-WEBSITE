import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createIncubationSchema } from "@/lib/validations";
import { googleSheetsService } from "@/lib/services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createIncubationSchema.parse(body);
    const application = await prisma.incubation_applications.create({
      data: { ...data, status: "New" },
    });

    googleSheetsService.addIncubationApplication({
      id: application.id,
      full_name: application.full_name,
      college_name: application.college_name,
      startup_name: application.startup_name,
      problem_statement: application.problem_statement,
      target_audience: application.target_audience,
      startup_stage: application.startup_stage,
      support_needed: application.support_needed,
      status: application.status,
      created_at: application.created_at,
    });

    return NextResponse.json(
      { success: true, message: "Incubation application submitted successfully", data: application },
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

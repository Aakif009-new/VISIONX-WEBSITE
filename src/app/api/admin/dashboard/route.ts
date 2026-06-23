import { NextResponse } from "next/server";
import { authenticate, requireRole } from "@/lib/auth";
import { adminDashboardService } from "@/lib/services";

export async function GET(req: Request) {
  try {
    const user = await authenticate(req);
    requireRole(user);
    const stats = await adminDashboardService.getStats();
    const activity = await adminDashboardService.getRecentActivity();
    return NextResponse.json({ success: true, data: { stats, recentActivity: activity } });
  } catch (error: any) {
    const status = error.message === "Insufficient permissions" ? 403 : 401;
    return NextResponse.json({ success: false, message: error.message }, { status });
  }
}

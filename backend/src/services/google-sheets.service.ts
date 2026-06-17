import { getGoogleSheetsClient, getSheetIds } from "../config/google";
import { logger } from "../utils/logger";

type SheetType =
  | "workshop_registrations"
  | "incubation_applications"
  | "member_applications";

export class GoogleSheetsService {
  private async appendRows(sheetName: SheetType, values: string[][]) {
    try {
      const sheets = getGoogleSheetsClient();
      const sheetIds = getSheetIds();
      const spreadsheetId = sheetIds[sheetName];

      if (!spreadsheetId) {
        logger.warn(`No sheet ID configured for ${sheetName}`);
        return;
      }

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "A:Z",
        valueInputOption: "USER_ENTERED",
        requestBody: { values },
      });

      logger.info(`Appended row to Google Sheet: ${sheetName}`);
    } catch (error) {
      logger.error(`Failed to append to Google Sheet ${sheetName}`, error);
    }
  }

  async addWorkshopRegistration(data: {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    college_name: string;
    department: string;
    year_of_study: string;
    workshop_name: string;
    created_at: Date;
  }) {
    const row = [
      data.id,
      data.full_name,
      data.email,
      data.phone,
      data.college_name,
      data.department,
      data.year_of_study,
      data.workshop_name,
      data.created_at.toISOString(),
    ];
    await this.appendRows("workshop_registrations", [row]);
  }

  async addIncubationApplication(data: {
    id: string;
    full_name: string;
    college_name: string;
    startup_name: string;
    problem_statement: string;
    target_audience: string;
    startup_stage: string;
    support_needed: string;
    status: string;
    created_at: Date;
  }) {
    const row = [
      data.id,
      data.full_name,
      data.college_name,
      data.startup_name,
      data.problem_statement,
      data.target_audience,
      data.startup_stage,
      data.support_needed,
      data.status,
      data.created_at.toISOString(),
    ];
    await this.appendRows("incubation_applications", [row]);
  }

  async addMemberApplication(data: {
    id: string;
    full_name: string;
    college_name: string;
    department: string;
    year_of_study: string;
    role_interested: string;
    why_join: string;
    relevant_experience: string | null;
    status: string;
    created_at: Date;
  }) {
    const row = [
      data.id,
      data.full_name,
      data.college_name,
      data.department,
      data.year_of_study,
      data.role_interested,
      data.why_join,
      data.relevant_experience || "",
      data.status,
      data.created_at.toISOString(),
    ];
    await this.appendRows("member_applications", [row]);
  }
}

export const googleSheetsService = new GoogleSheetsService();

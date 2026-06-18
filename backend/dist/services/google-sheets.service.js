"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSheetsService = exports.GoogleSheetsService = void 0;
const google_1 = require("../config/google");
const logger_1 = require("../utils/logger");
class GoogleSheetsService {
    async appendRows(sheetName, values) {
        try {
            const sheets = (0, google_1.getGoogleSheetsClient)();
            const sheetIds = (0, google_1.getSheetIds)();
            const spreadsheetId = sheetIds[sheetName];
            if (!spreadsheetId) {
                logger_1.logger.warn(`No sheet ID configured for ${sheetName}`);
                return;
            }
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: "A:Z",
                valueInputOption: "USER_ENTERED",
                requestBody: { values },
            });
            logger_1.logger.info(`Appended row to Google Sheet: ${sheetName}`);
        }
        catch (error) {
            logger_1.logger.error(`Failed to append to Google Sheet ${sheetName}`, error);
        }
    }
    async addWorkshopRegistration(data) {
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
    async addIncubationApplication(data) {
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
    async addMemberApplication(data) {
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
exports.GoogleSheetsService = GoogleSheetsService;
exports.googleSheetsService = new GoogleSheetsService();
//# sourceMappingURL=google-sheets.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleSheetsClient = getGoogleSheetsClient;
exports.getSheetIds = getSheetIds;
const googleapis_1 = require("googleapis");
function getGoogleSheetsClient() {
    const auth = new googleapis_1.google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return googleapis_1.google.sheets({ version: "v4", auth });
}
function getSheetIds() {
    try {
        return JSON.parse(process.env.GOOGLE_SHEET_IDS || "{}");
    }
    catch {
        return {};
    }
}
//# sourceMappingURL=google.js.map
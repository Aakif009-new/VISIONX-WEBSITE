import { google } from "googleapis";

export function getGoogleSheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export function getSheetIds(): Record<string, string> {
  try {
    return JSON.parse(process.env.GOOGLE_SHEET_IDS || "{}");
  } catch {
    return {};
  }
}

// app/api/contact/route.ts (Next.js App Router)
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, social } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Load service account credentials from env
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:D", // adjust sheet name / columns if needed
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, message, social || ""]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

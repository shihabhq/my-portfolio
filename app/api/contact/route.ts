// app/api/contact/route.ts (Next.js App Router)
import { GoogleAuth } from "google-auth-library";
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

    const auth = new GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const { token: accessToken } = await client.getAccessToken();

    if (!accessToken) {
      throw new Error("Failed to obtain Google access token");
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Sheet1!A:D"; // adjust sheet name / columns if needed
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
      range
    )}:append?valueInputOption=RAW`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[name, email, message, social || ""]],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Sheets API error ${res.status}: ${errText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

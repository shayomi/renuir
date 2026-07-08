import { Resend } from "resend";
import { NextResponse } from "next/server";

// This route talks to external services at request time only. Avoid running on
// the Edge and keep it out of static analysis at build time.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Instantiate lazily so `next build` (which collects route metadata without
    // env vars) never throws on a missing RESEND_API_KEY.
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server is not configured" },
        { status: 500 }
      );
    }
    const resend = new Resend(resendKey);

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Waitlist`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
          },
        }),
      }
    );

    if (!airtableRes.ok) {
      const errorText = await airtableRes.text();
      console.error("Airtable error:", errorText);
      throw new Error(errorText);
    }

    await resend.emails.send({
      from: "Renuir <info@renuir.com>",
      to: ["info@renuir.com"],
      subject: "New Waitlist Signup",
      html: `
        <p>🎉 New waitlist signup</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    await resend.emails.send({
      from: "Renuir <info@renuir.com>",
      to: email,
      subject: "Thank you for joining the Renuir waitlist.🎉",
      html: `
        <p>You are now on the list. Renuir helps lost items return to their owners quickly and securely.</p>
        <p>You will receive an email notification when we launch in the next few months.</p>
         <p>— Renuir Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

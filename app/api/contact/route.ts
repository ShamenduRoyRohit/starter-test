import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  // Option A: Log to Vercel (simple no-email demo)
  console.log("Contact form submission:", { name, email, message });

  // Option B: Send email via Resend if configured
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "no-reply@example.com";

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          from,
          to,
          subject: `New message from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong><br/>${message}</p>`
        })
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Resend error:", text);
      }
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ message: "Thanks! We’ll get back to you shortly." });
}

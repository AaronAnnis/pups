import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const form = await request.json();

  const rows = Object.entries(form)
    .filter(([, v]) => typeof v === "string" && v.trim())
    .map(([k, v]) => {
      const label = k.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
      return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px">${v}</td></tr>`;
    })
    .join("");

  const html = `<h2>New Puppy Application</h2><table border="0" cellpadding="0" cellspacing="0">${rows}</table>`;

  const { error } = await resend.emails.send({
    from: "Goose River Canine Co. <onboarding@resend.dev>",
    to: "hello@gooserivercanine.com",
    subject: `New Puppy Application — ${form.fullName || "Unknown"}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

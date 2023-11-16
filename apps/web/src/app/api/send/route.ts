import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/server/resend";
import { User } from "@/lib/types";
import Invoice from "@components/templates/invoice";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const random = request.nextUrl.searchParams.get("random");
  if (!random) {
    const data = await resend.emails.send({
      from: process.env.SENDER_MAIL ?? "",
      to: body.email,
      subject: `InvoiceX - invoice for ${body.recipient}`,
      react: Invoice({
        email: body.email,
        recipient: body.recipient,
        invoiceDate: body.invoiceDate,
        amount: body.amount,
        orderId: crypto.randomBytes(8).toString("hex"),
        billing: body.billing,
      }),
    });
    return NextResponse.json({ data });
  } else {
    const details = getRandomDetails(body.email);
    const data = await resend.emails.send({
      from: process.env.SENDER_MAIL ?? "",
      to: body.email,
      subject: `InvoiceX - invoice for ${details.recipient}`,
      react: Invoice(details),
    });
    return NextResponse.json(data);
  }
}

function getRandomDetails(email: string) {
  const recipients = [
    "Zapier",
    "GoDaddy",
    "Vercel",
    "Github",
    "TensorGo",
    "Google",
    "Resend",
  ];
  const billings = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Coimbatore",
  ];
  return {
    email,
    recipient: recipients[Math.floor(Math.random() * recipients.length)],
    invoiceDate: new Date(
      new Date().getTime() + Math.random() * 50 * 24 * 60 * 60 * 1000
    ),
    amount: (Math.random() * 10000 + 1).toFixed(2),
    orderId: crypto.randomBytes(8).toString("hex"),
    billing: billings[Math.floor(Math.random() * billings.length)],
  };
}

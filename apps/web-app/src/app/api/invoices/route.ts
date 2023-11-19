import { NextRequest } from "next/server";
import { NEXT_PUBLIC_RESOURCE_URL } from "@/lib/constants";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const random = request.nextUrl.searchParams.get("random");
  const cookie = cookies().get("token");
  let details = {
    recipient: body.recipient as string,
    amount: body.amount ? parseFloat(body.amount) : 0,
    dueDate: body.dueDate ? new Date(body.dueDate) : new Date(),
  };
  if (random) {
    details = {
      recipient: body.recipient as string,
      amount: parseFloat((Math.random() * 10000 + 1).toFixed(2)),
      dueDate: new Date(
        new Date().getTime() + Math.random() * 50 * 24 * 60 * 60 * 1000
      ),
    };
  }
  const response = await fetch(NEXT_PUBLIC_RESOURCE_URL + "/invoices", {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      Authorization: "Bearer " + cookie?.value,
      "content-type": "application/json",
    },
  });
  return response;
}

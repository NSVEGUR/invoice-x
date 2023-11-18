import { NextRequest } from "next/server";
import { NEXT_PUBLIC_RESOURCE_URL } from "@/lib/constants";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const headers = new Headers(request.headers);
  const response = await fetch(NEXT_PUBLIC_RESOURCE_URL + "/invoice", {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });
  return response;
}

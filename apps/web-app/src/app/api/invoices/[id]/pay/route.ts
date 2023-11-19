import { NextRequest } from "next/server";
import { NEXT_PUBLIC_RESOURCE_URL } from "@/lib/constants";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const id = params.id;
  const cookie = cookies().get("token");
  const response = await fetch(
    NEXT_PUBLIC_RESOURCE_URL + `/invoices/${id}/pay`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cookie?.value,
        "content-type": "application/json",
      },
    }
  );
  revalidatePath("/", "page");
  return response;
}

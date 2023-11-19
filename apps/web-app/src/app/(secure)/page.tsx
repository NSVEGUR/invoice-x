import { Link } from "@/components/ui/link";
import { getUser } from "@/lib/server/user";
import { NEXT_PUBLIC_RESOURCE_URL } from "@/lib/constants";
import { cookies } from "next/headers";
import { Invoice } from "@/lib/types";
import Dashboard from "./Dashboard";
import { filterInvoices } from "@/lib/utils/invoice";

async function getInvoices() {
  try {
    const cookie = cookies().get("token");
    const response = await fetch(NEXT_PUBLIC_RESOURCE_URL + "/invoices", {
      headers: {
        Authorization: "Bearer " + cookie?.value,
      },
    });
    const result = await response.json();
    if (result.success == true) {
      const { invoices } = result.data;
      return invoices as Invoice[];
    }
  } catch (err) {
    console.error(err);
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; sort?: string };
}): Promise<JSX.Element> {
  const invoices = await getInvoices();
  const user = getUser();
  if (!invoices || !user) {
    return <h1>Authentication failed, Please Login Again</h1>;
  }
  const filtered = filterInvoices(invoices, searchParams);
  return (
    <div className="flex flex-col gap-5 justify-start items-center h-full pt-16 w-full">
      <div className="flex">
        <h1 className="text-2xl font-semibold">Invoices</h1>
        <div className="absolute right-20 flex w-[225px] flex-col gap-2">
          <Link href="/create" className="h-8 w-full">
            Create Manual Invoice &#43;
          </Link>
          <Link
            href="/create?random=true"
            className="h-8 w-full"
            intent="accent"
          >
            Generate Random Invoice &#10023;
          </Link>
        </div>
      </div>
      <Dashboard invoices={filtered} user={user} />
    </div>
  );
}

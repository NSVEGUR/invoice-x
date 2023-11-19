import { Link } from "@/components/ui/link";
import { getUser } from "@/lib/server/user";
import { NEXT_PUBLIC_RESOURCE_URL } from "@/lib/constants";
import { cookies } from "next/headers";

async function getInvoices() {
  try {
    const cookie = cookies().get("token");
    const response = await fetch(NEXT_PUBLIC_RESOURCE_URL + "/invoices", {
      headers: {
        Authorization: "Bearer " + cookie?.value,
      },
    });
    const result = await response.json();
    const invoices = result;
    return invoices;
  } catch (err) {
    console.error(err);
  }
}

export default async function Page(): Promise<JSX.Element> {
  const invoices = await getInvoices();
  const user = getUser();
  if (!invoices || !user) {
    return <h1>Some Unknown Error Occurred</h1>;
  }
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
      <section className="flex items-center flex-col w-full pt-5">
        {invoices.length > 0 ? (
          <div className="relative overflow-x-auto sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-dominant">
              <thead className="text-xs text-heading uppercase bg-muted-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {invoices.map((invoice) => {
                  return (
                    <tr className="odd:bg-black/30 even:bg-gray-600/40 backdrop-blur-md border-b border-dominant">
                      <td className="px-6 py-4">{invoice.subject}</td>
                      <td className="px-6 py-4">
                        {invoice.senderMail} ({invoice.senderName})
                      </td>
                      <td className="px-6 py-4">
                        {getDateFromString(`${invoice.date}`)}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-accent hover:underline"
                        >
                          Notify
                        </a>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        ) : (
          <p>
            No invoices have been present in your recent mails, please click on
            generate.
          </p>
        )}
      </section>
    </div>
  );
}

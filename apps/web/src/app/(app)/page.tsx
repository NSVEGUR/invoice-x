import { Link } from "@/components/ui/link";
import { Invoice } from "@/lib/types";
import { getDateFromString, getFormattedDate } from "@/lib/utils/date";
import { headers } from "next/headers";
import { stringify } from "querystring";

async function getInvoices() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/invoice", {
      credentials: "same-origin",
      headers: headers(),
    });
    const result = await response.json();
    const invoices = {
      created: result.invoices.created as Invoice[],
      recipient: result.invoices.recipient as Invoice[],
    };
    return invoices;
  } catch (err) {
    console.error(err);
  }
}

export default async function Page(): Promise<JSX.Element> {
  const invoices = await getInvoices();
  if (!invoices) {
    return <h1>Some Unknown Error Occurred</h1>;
  }
  const { created, recipient } = invoices;
  return (
    <div className="flex flex-col gap-5 justify-start items-center h-full pt-16">
      <Link href="/create" className="h-8 self-end">
        Create Invoice &#43;
      </Link>
      <div className="flex flex-wrap w-full justify-evenly pt-5 -md:flex-col">
        <section className="flex items-center flex-col w-[45%] -md:w-full">
          <h1 className="text-2xl font-semibold">Created Invoices</h1>
          {created.length > 0 ? (
            <div className="relative overflow-x-auto sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-dominant">
                <thead className="text-xs text-heading uppercase bg-muted-secondary">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Recipient
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {created.map((invoice) => {
                    return (
                      <tr className="odd:bg-black/30 even:bg-gray-600/40 backdrop-blur-md border-b border-dominant">
                        <td className="px-6 py-4">{invoice.amount}</td>
                        <td className="px-6 py-4">
                          {getDateFromString(`${invoice.dueDate}`)}
                        </td>
                        <td className="px-6 py-4">
                          {invoice.recipient.email} ({invoice.recipient.name})
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
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No invoices have been created by you.</p>
          )}
        </section>
        <section className="flex items-center flex-col w-[45%] -md:w-full">
          <h1 className="text-2xl font-semibold">Recipient Invoices</h1>
          {recipient.length > 0 ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-dominant">
                <thead className="text-xs text-heading uppercase bg-muted-secondary">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Creator
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recipient.map((invoice) => {
                    return (
                      <tr className="odd:bg-black/50 even:bg-white/50 border-b border-dominant">
                        <td className="px-6 py-4">{invoice.amount}</td>
                        <td className="px-6 py-4">
                          {getDateFromString(`${invoice.dueDate}`)}
                        </td>
                        <td className="px-6 py-4">
                          {invoice.user.email} ({invoice.user.name})
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
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No invoices have been created for you.</p>
          )}
        </section>
      </div>
    </div>
  );
}

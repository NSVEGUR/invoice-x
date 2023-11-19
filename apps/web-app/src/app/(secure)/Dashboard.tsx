import { Invoice } from "@/lib/types";
import { getDateFromString } from "@/lib/utils/date";
import Sort from "@components/svg/sort";
import SearchBar from "./SearchBar";
import Sorter from "./Sorter";

export default function Dashboard({ invoices }: { invoices: Invoice[] }) {
  return (
    <div>
      <section className="flex items-center flex-col w-full pt-5">
        <SearchBar />
        {invoices.length > 0 ? (
          <div className="relative overflow-x-auto sm:rounded-lg mt-5">
            <table className="w-full text-left text-sm rtl:text-right text-dominant">
              <Sorter />
              <tbody>
                {invoices.map((invoice) => {
                  return (
                    <tr
                      className="bg-black/50  backdrop-blur-md border-b border-dominant"
                      key={invoice.id}
                    >
                      <th className="px-6 py-4 whitespace-nowrap">
                        {invoice.recipient}
                      </th>
                      <td className="px-6 py-4">{invoice.amount}</td>
                      <td className="px-6 py-4">
                        {getDateFromString(`${invoice.dueDate}`)}
                      </td>
                      <td className="px-6 py-4">
                        {invoice.status == "paid" ? (
                          <span>{invoice.status.toUpperCase()}</span>
                        ) : (
                          <span className="text-red-500">
                            {invoice.status.toUpperCase()}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-accent hover:underline"
                        >
                          Remind
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No invoices.</p>
        )}
      </section>
    </div>
  );
}

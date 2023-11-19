"use client";

import { Invoice, User } from "@/lib/types";
import { getDateFromString } from "@/lib/utils/date";
import SearchBar from "./SearchBar";
import Sorter from "./Sorter";
import { useSnackbar } from "@/components/snackbar/snackbar.provider";
import Actions from "./Actions";
import { useRouter } from "next/navigation";

export default function Dashboard({
  invoices,
  user,
}: {
  invoices: Invoice[];
  user: User;
}) {
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  async function deleteInvoice(id: number) {
    let success = false;
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) {
      return;
    }
    setSnackbar({ message: "Deleting Invoice...", type: "promise" });
    try {
      const response = await fetch(`/api/invoices/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      success = result.success;
      if (result.success == false) {
        const message = result.message ?? "Some Unknown Error Occurred";
        setSnackbar({ message, type: "failure" });
      }
    } catch (err) {
      console.error(err);
    }
    if (success) {
      setSnackbar({ message: "Invoice Deleted", type: "success" });
      setTimeout(() => {
        router.refresh();
      });
    }
  }
  async function payInvoice(id: number) {
    let success = false;
    setSnackbar({ message: "Creating Invoice...", type: "promise" });
    try {
      const response = await fetch(`/api/invoices/${id}/pay`, {
        method: "POST",
      });
      const result = await response.json();
      success = result.success;
      if (result.success == false) {
        const message = result.message ?? "Some Unknown Error Occurred";
        setSnackbar({ message, type: "failure" });
      }
    } catch (err) {
      console.error(err);
    }
    if (success) {
      setSnackbar({ message: "Paid for Invoice", type: "success" });
      setTimeout(() => {
        router.refresh();
      });
    }
  }
  async function triggerInvoice(id: number) {
    let success = false;
    setSnackbar({
      message: "Triggering Invoice Due Notification...",
      type: "promise",
    });
    try {
      const response = await fetch(`/api/invoices/${id}/remind`, {
        method: "POST",
      });
      const result = await response.json();
      success = result.success;
      if (result.success == false) {
        const message = result.message ?? "Some Unknown Error Occurred";
        setSnackbar({ message, type: "failure" });
      }
    } catch (err) {
      console.error(err);
    }
    if (success) {
      setSnackbar({
        message: "Invoice Notification has been triggered",
        type: "success",
      });
    }
  }
  return (
    <div>
      <section className="flex items-center flex-col w-full pt-5">
        <SearchBar />
        {invoices.length > 0 ? (
          <div className="relative overflow-x-auto sm:rounded-lg mt-5">
            <table className="w-full text-left rtl:text-right text-dominant">
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
                          <span className="bg-green-600 text-xs rounded-md p-1 text-inverted">
                            {invoice.status.toUpperCase()}
                          </span>
                        ) : (
                          <span className=" bg-red-600 text-xs rounded-md p-1 text-heading">
                            {invoice.status.toUpperCase()}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <Actions
                          {...{
                            email: user.email,
                            invoice,
                            deleteInvoice,
                            payInvoice,
                            triggerInvoice,
                          }}
                        />
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

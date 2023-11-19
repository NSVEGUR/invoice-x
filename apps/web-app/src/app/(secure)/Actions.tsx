import { Invoice } from "@/lib/types";
import Delete from "@components/svg/delete";

export default function Actions({
  invoice,
  email,
  deleteInvoice,
  payInvoice,
  triggerInvoice,
}: {
  invoice: Invoice;
  email: string;
  deleteInvoice(id: number): Promise<void>;
  payInvoice(id: number): Promise<void>;
  triggerInvoice(id: number): Promise<void>;
}) {
  return (
    <div className="flex gap-3 items-center justify-between">
      {invoice.recipient == email
        ? invoice.status != "paid" && (
            <button
              className="font-medium text-accent hover:underline"
              onClick={() => payInvoice(invoice.id)}
            >
              Pay Invoice
            </button>
          )
        : invoice.status != "paid" && (
            <button
              className="font-medium text-accent hover:underline"
              onClick={() => triggerInvoice(invoice.id)}
            >
              Trigger Reminder
            </button>
          )}
      {invoice.recipient == email && invoice.status == "paid" && (
        <span>None</span>
      )}
      {invoice.recipient != email && invoice.status == "paid" && (
        <span>None</span>
      )}
      <button onClick={() => deleteInvoice(invoice.id)}>
        <Delete />
      </button>
    </div>
  );
}

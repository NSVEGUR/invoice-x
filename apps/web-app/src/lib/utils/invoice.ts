import { Invoice } from "@lib/types";

export function filterInvoices(
  invoices: Invoice[],
  searchParams: { search?: string; sort?: string }
) {
  const sort = searchParams.sort ?? "";
  if (sort) {
    const sortables = sort.split(",");
    const sortByAmount = () => {
      invoices.sort((a, b) => {
        return b.amount - a.amount;
      });
    };
    const sortByDate = () => {
      invoices.sort((a, b) => {
        const x = new Date(a.dueDate).getTime();
        const y = new Date(b.dueDate).getTime();
        return x - y;
      });
    };
    const sortByStatus = () => {
      invoices.sort((a, b) => {
        const x = a.status.toUpperCase();
        const y = b.status.toUpperCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
    };
    const sortByRecipient = () => {
      invoices.sort((a, b) => {
        const x = a.recipient.toUpperCase();
        const y = b.recipient.toUpperCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
    };
    for (const sortable of sortables) {
      if (sortable == "amount") {
        sortByAmount();
      }
      if (sortable == "dueDate") {
        sortByDate();
      }
      if (sortable == "status") {
        sortByStatus();
      }
      if (sortable == "dueDate") {
        sortByRecipient();
      }
    }
  }
  const searchQuery = searchParams.search ?? "";
  return invoices.filter((invoice) => invoice.recipient.includes(searchQuery));
}

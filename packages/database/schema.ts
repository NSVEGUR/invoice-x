import { serial, text, pgEnum, real, pgTable, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  name: text("name"),
  picture: text("picture"),
});

export type User = typeof users.$inferSelect;
export type Invoice = typeof invoices.$inferSelect;

export const invoiceStatus = pgEnum("invoice_status", ["paid", "unpaid"]);

export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  amount: real("amount"),
  status: invoiceStatus("status").notNull().default("unpaid"),
  dueDate: date("due_date").notNull(),
  paidAt: date("paid_at"),
  recipient: text("recipient").notNull(),
});

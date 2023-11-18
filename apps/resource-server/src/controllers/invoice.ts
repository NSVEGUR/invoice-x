import type { Request, Response, NextFunction } from "express";
import { db, sql } from "database";
import { User, invoices } from "database/schema";
import catchAsync from "@server/utils/catch-async";
import AppError from "@server/utils/app-error";
import { redis } from "@server/server";

export const getInvoices = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user as User;
  const cached = await redis.get(`${user.id}`);
  if (cached) {
    const invoices = JSON.parse(cached);
    return res.status(200).json({
      success: true,
      message: "Fetched invoices successfully",
      data: {
        invoices,
      },
    });
  }
  const created = await db.query.invoices.findMany({
    where: (users, { eq }) => eq(users.id, user.id),
  });
  const recipient = await db.query.invoices.findMany({
    where: (invoices, { eq }) => eq(invoices.recipient, user.email),
  });
  const invoices = {
    created,
    recipient,
  };
  await redis.set(`${user.id}`, JSON.stringify(invoices));
  return res.status(200).json({
    success: true,
    message: "Fetched invoices successfully",
    data: {
      invoices,
    },
  });
});

export const createInvoice = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user as User;
  const details = req.body;
  const recipient = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, details.recipient),
  });
  const invoice = await db.insert(invoices).values({
    amount: details.amount,
    recipient: details.recipient,
    dueDate: details.dueDate,
  });
  await redis.del(`${user.id}`);
  if (recipient) {
    await redis.del(`${recipient.id}`);
  }
  return res.status(201).json({
    success: true,
    message: "Created invoice successfully",
    data: {
      invoice,
    },
  });
});

export const payInvoice = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user as User;
  const id = Number(req.params.id);
  const recipients = await db.query.invoices.findMany({
    columns: {
      id: true,
    },
    where: (invoices, { eq }) => eq(invoices.recipient, user.email),
  });
  if (recipients.find((recipient) => recipient.id === id) === undefined) {
    return next(
      new AppError("You are not authorized to pay this invoice", 403)
    );
  }
  const invoice = await db
    .update(invoices)
    .set({
      status: "paid",
    })
    .where(sql`${invoices.id} = ${id}`);
  await redis.del(`${user.id}`);
  return res.status(200).json({
    success: true,
    message: "Paid invoice successfully",
    data: {
      invoice,
    },
  });
});

export const updateInvoice = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user as User;
  const id = req.params.id;
  const details = req.body;
  const recipient = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, details.recipient),
  });

  const invoice = await db
    .update(invoices)
    .set({
      ...details,
    })
    .where(sql`${invoices.id} = ${id}`);
  await redis.del(`${user.id}`);
  if (recipient) {
    await redis.del(`${recipient.id}`);
  }
  return res.status(200).json({
    success: true,
    message: "Updated invoice successfully",
    data: {
      invoice,
    },
  });
});

export const deleteInvoice = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user as User;
  const id = Number(req.params.id);
  const invoice = await db.query.invoices.findFirst({
    where: (invoices, { eq }) => eq(invoices.id, id),
  });
  if (!invoice) {
    return next(new AppError("Invoice not found", 404));
  }
  const recipient = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, invoice.recipient),
  });
  await db.delete(invoices).where(sql`${invoices.id} = ${id}`);
  await redis.del(`${user.id}`);
  if (recipient) {
    await redis.del(`${recipient.id}`);
  }
  return res.status(204).json({
    success: true,
    message: "Deleted invoice successfully",
  });
});

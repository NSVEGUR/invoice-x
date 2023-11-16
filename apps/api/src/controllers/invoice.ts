import { prisma } from "@api/db";
import AppError from "@api/utils/app-error";
import catchAsync from "@api/utils/catch-async";
import { type User } from "@prisma/client";
import type { Request, Response, NextFunction } from "express";

export const getInvoices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;
    const invoices = await prisma.invoice.findMany({
      where: {
        userId: user.id,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Invoices have been successfully retrieved",
      invoices,
    });
  }
);

export const createInvoice = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;
    const details = req.body;
    const recipient = await prisma.user.findUnique({
      where: {
        email: details.recipient,
      },
    });
    if (!recipient) {
      return next(new AppError("Recipient not found", 404));
    }
    const invoice = await prisma.invoice.create({
      data: {
        userId: user.id,
        recipientId: recipient.id,
        amount: details.amount,
        dueDate: details.due,
      },
    });
    return res.status(201).json({
      success: true,
      message: "Invoice has been successfully created",
      invoice,
    });
  }
);

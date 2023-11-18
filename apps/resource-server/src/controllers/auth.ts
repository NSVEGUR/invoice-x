import AppError from "@server/utils/app-error";
import catchAsync from "@server/utils/catch-async";
import { verifyToken } from "@server/utils/token";
import { db } from "database";
import { NextFunction, Request, Response } from "express";

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = "";
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
      token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new AppError("Authorization error", 401));
    }
    const decoded = (await verifyToken(token)) as any;
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, decoded.id),
    });
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    req.user = user;
    next();
  }
);

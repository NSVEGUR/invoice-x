import { ExtendedUser } from "@api/types";
import catchAsync from "@api/utils/catch-async";
import type { Request, Response, NextFunction } from "express";

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("protector", req.user, req.body);
    if (!req.user) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }
    next();
  }
);

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }
    const user = req.user as ExtendedUser;
    const data = user._json;
    return res.status(200).json({
      success: true,
      message: "User has successfully authenticated",
      user: {
        name: data.name,
        email: data.email,
        picture: data.picture,
      },
    });
  }
);

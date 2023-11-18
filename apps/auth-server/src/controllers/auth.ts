import { ExtendedUser } from "@server/types";
import AppError from "@server/utils/app-error";
import catchAsync from "@server/utils/catch-async";
import { NextFunction, Request, Response } from "express";

export const refreshToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as any;
    if (!user || !user.refreshToken) {
      return next(new AppError("Refresh Authentication Error", 401));
    }
    return res.status(200).json({
      success: true,
      message: "User has successfully authenticated",
      refreshToken: user.refreshToken,
    });
  }
);

export const getAccessToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as any;
    if (!user || !user.accessToken) {
      return next(new AppError("Access Authentication Error", 401));
    }
    return res.status(200).json({
      success: true,
      message: "User has successfully authenticated",
      accessToken: user.accessToken,
    });
  }
);

export const successRedirect = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
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

export const failureRedirect = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {
    res.status(401).json({
      success: false,
      message: "User failed to authenticate.",
    });
  }
);

export const logout = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
      console.error(err);
    });
    res.redirect(process.env.CLIENT_URL ?? "");
  }
);

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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

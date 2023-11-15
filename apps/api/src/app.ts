import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import AuthRouter from "@api/routes/auth";
import AppError from "@api/utils/app-error";
import ErrorHandler from "@api/controllers/error";

export const createApp = () => {
  const app = express();
  app
    .use(morgan("dev"))
    .set("trust proxy", 1)
    .use(
      session({
        secret: process.env.SESSION_SECRET || "",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
      })
    )
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: "*",
      })
    )
    .use("/auth", AuthRouter)
    .use("*", (req, res, next) => {
      next(new AppError(`Cannot find the ${req.originalUrl} on this api`, 404));
    })
    .use(ErrorHandler);
  return app;
};

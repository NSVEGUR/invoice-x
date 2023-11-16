import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import AuthRouter from "@api/routes/auth";
import InvoiceRouter from "@api/routes/invoice";
import AppError from "@api/utils/app-error";
import ErrorHandler from "@api/controllers/error";
import passport from "passport";
import { getUser } from "@api/controllers/user";
require("@api/utils/google-passport");

export const createApp = () => {
  const app = express();
  app
    .use(morgan("dev"))
    .use(express.static("public"))
    .set("trust proxy", 1)
    .use(
      session({
        secret: "InvoiceX-API",
        resave: false,
        saveUninitialized: false,
      })
    )
    .use(passport.initialize())
    .use(passport.session())
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: "*",
      })
    )
    .use("/health", (_, res) => {
      res.status(200).json({
        success: true,
        message: "Hey, I am fine!",
      });
    })
    .use("/auth", AuthRouter)
    .get("/user", getUser)
    .use("/invoice", InvoiceRouter)
    .use("*", (req, res, next) => {
      next(new AppError(`Cannot find the ${req.originalUrl} on this api`, 404));
    })
    .use(ErrorHandler);
  return app;
};

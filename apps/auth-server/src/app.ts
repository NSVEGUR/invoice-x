import express from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import Router from "@server/routes";
require("@server/utils/google-passport");

export const createApp = () => {
  const app = express();
  app
    .use(morgan("dev"))
    .set("trust proxy", 1)
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .use(
      session({
        secret: process.env.SESSION_SECRET ?? "",
        resave: false,
        saveUninitialized: false,
      })
    )
    .use(passport.initialize())
    .use(passport.session())
    .use(
      cors({
        origin: process.env.CLIENT_URL ?? "",
      })
    )
    .use("/", Router);
  return app;
};

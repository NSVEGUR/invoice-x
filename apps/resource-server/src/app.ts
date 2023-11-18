import express from "express";
import morgan from "morgan";
import cors from "cors";
import Router from "@server/routes";

export const createApp = () => {
  const app = express();
  app
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .use(
      cors({
        origin: process.env.CLIENT_URL ?? "",
        credentials: true,
      })
    )
    .use("/", Router);
  return app;
};

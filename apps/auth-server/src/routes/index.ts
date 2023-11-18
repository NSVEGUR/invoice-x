import { Router } from "express";
import AuthRouter from "@server/routes/auth";
import AppError from "@server/utils/app-error";
import ErrorHandler from "@server/controllers/error";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Hey, I am Authentication server for InvoiceX😁!",
  });
});
router.use("/auth", AuthRouter);
router
  .use("*", (req, res, next) => {
    next(
      new AppError(`Cannot find the ${req.originalUrl} on this server 😓`, 404)
    );
  })
  .use(ErrorHandler);

export default router;

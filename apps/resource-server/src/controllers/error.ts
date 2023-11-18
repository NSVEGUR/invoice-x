import { Request, Response, NextFunction } from "express";

const sendErrorDev = (err: any, res: Response) => {
  console.error("💥💥💥ERROR: ", err);
  return res.status(err.statusCode).json({
    success: false,
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err: any, res: Response) => {
  // Errors created by us
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
  //Programming or unknown error
  console.error("💥💥💥ERROR: ", err);
  return res.status(500).json({
    success: false,
    status: "error",
    message: "Something went wrong :(",
  });
};

export default function errorControler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, res);
  } else {
    sendErrorDev(err, res);
  }
}

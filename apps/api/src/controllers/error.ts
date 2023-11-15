import AppError from "@api/utils/app-error";
import { Request, Response, NextFunction } from "express";

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsErrorDB = (err: any) => {
  const value = err.keyValue[Object.keys(err.keyValue)[0]];
  const message = `${value} exist!`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err: any, res: Response) => {
  // Errors created by me
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  //Programming or unknown error
  else {
    console.error("ERROR!💥💥💥", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong :(",
    });
  }
};

export default function errorControler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;
    if (err.name === "CastError") error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsErrorDB(error);
    sendErrorProd(error, res);
  }
}

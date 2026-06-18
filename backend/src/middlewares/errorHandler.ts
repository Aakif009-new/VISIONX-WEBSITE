import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { logger } from "../utils/logger";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  logger.error(err.message, err.stack);

  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Validation error",
      error: err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}

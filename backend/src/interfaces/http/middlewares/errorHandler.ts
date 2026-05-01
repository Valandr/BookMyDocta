import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (
  error: unknown,
  _request: Request,
  response: Response,
  // Express recognizes error handlers by their four-argument signature.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  if (error instanceof ZodError) {
    response.status(400).json({
      message: 'Validation error',
      issues: error.flatten(),
    });
    return;
  }

  response.status(500).json({
    message: 'Internal server error',
  });
};

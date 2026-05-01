import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export const validateRequest =
  <T>(schema: ZodSchema<T>) =>
  (request: Request, _response: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: request.body,
        params: request.params,
        query: request.query,
      });
      next();
    } catch (error) {
      next(error);
    }
  };


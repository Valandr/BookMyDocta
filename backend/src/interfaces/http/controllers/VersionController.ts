import type { Request, Response, NextFunction } from 'express';
import { GetVersionUseCase } from '@/application/use-cases/GetVersionUseCase';

export class VersionController {
  constructor(private readonly getVersionUseCase: GetVersionUseCase) {}

  handle = (_request: Request, response: Response, next: NextFunction): void => {
    try {
      const payload = this.getVersionUseCase.execute();
      response.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  };
}

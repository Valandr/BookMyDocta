import type { Request, Response, NextFunction } from 'express';
import { GetHealthStatusUseCase } from '@/application/use-cases/GetHealthStatusUseCase';

export class HealthController {
  constructor(private readonly getHealthStatusUseCase: GetHealthStatusUseCase) {}

  handle = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const payload = await this.getHealthStatusUseCase.execute();
      response.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  };
}

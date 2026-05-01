import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import swaggerUi from 'swagger-ui-express';
import type { AppConfig } from '@/application/ports/AppConfig';
import { GetHealthStatusUseCase } from '@/application/use-cases/GetHealthStatusUseCase';
import { GetVersionUseCase } from '@/application/use-cases/GetVersionUseCase';
import type { SystemStatusRepository } from '@/domain/repositories/SystemStatusRepository';
import { logger } from '@/infrastructure/logger/logger';
import { apiRateLimiter } from '@/infrastructure/security/rateLimiter';
import { HealthController } from '@/interfaces/http/controllers/HealthController';
import { VersionController } from '@/interfaces/http/controllers/VersionController';
import { errorHandler } from '@/interfaces/http/middlewares/errorHandler';
import { createApiRouter } from '@/interfaces/http/routes';
import { swaggerDocument } from '@/interfaces/http/routes/swagger';

interface CreateAppDependencies {
  systemStatusRepository: SystemStatusRepository;
  config: AppConfig & { apiPrefix: string; frontendOrigin: string };
}

export const createApp = ({ systemStatusRepository, config }: CreateAppDependencies): Express => {
  const app = express();
  const healthController = new HealthController(
    new GetHealthStatusUseCase(systemStatusRepository, config),
  );
  const versionController = new VersionController(new GetVersionUseCase(config));

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(
    cors({
      origin: config.frontendOrigin,
      credentials: false,
    }),
  );
  app.use(apiRateLimiter);
  app.use(express.json({ limit: '100kb' }));
  app.use(pinoHttp({ logger }));

  app.use(config.apiPrefix, createApiRouter({ healthController, versionController }));
  app.use(`${config.apiPrefix}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(errorHandler);

  return app;
};

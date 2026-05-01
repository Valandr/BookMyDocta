import { Router } from 'express';
import { HealthController } from '@/interfaces/http/controllers/HealthController';
import { VersionController } from '@/interfaces/http/controllers/VersionController';
import { createSystemRoutes } from '@/interfaces/http/routes/systemRoutes';

interface RoutesDependencies {
  healthController: HealthController;
  versionController: VersionController;
}

export const createApiRouter = (dependencies: RoutesDependencies): Router => {
  const router = Router();

  router.use(createSystemRoutes(dependencies));

  return router;
};

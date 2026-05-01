import type { AppConfig } from '@/application/ports/AppConfig';
import type { HealthStatus } from '@/domain/entities/HealthStatus';
import type { SystemStatusRepository } from '@/domain/repositories/SystemStatusRepository';

export class GetHealthStatusUseCase {
  constructor(
    private readonly systemStatusRepository: SystemStatusRepository,
    private readonly config: AppConfig,
  ) {}

  async execute(): Promise<HealthStatus> {
    const isDatabaseReachable = await this.systemStatusRepository.isDatabaseReachable();

    return {
      status: 'ok',
      service: this.config.appName,
      version: this.config.version,
      database: isDatabaseReachable ? 'up' : 'down',
      timestamp: new Date().toISOString(),
    };
  }
}

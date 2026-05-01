import type { VersionResponseDto } from '@/application/dto/VersionResponseDto';
import type { AppConfig } from '@/application/ports/AppConfig';

export class GetVersionUseCase {
  constructor(private readonly config: AppConfig) {}

  execute(): VersionResponseDto {
    return {
      service: this.config.appName,
      version: this.config.version,
      environment: this.config.environment,
    };
  }
}

export interface HealthStatus {
  status: 'ok';
  service: string;
  version: string;
  database: 'up' | 'down';
  timestamp: string;
}

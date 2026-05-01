import type { Pool } from 'pg';
import type { SystemStatusRepository } from '@/domain/repositories/SystemStatusRepository';

export class PostgresSystemStatusRepository implements SystemStatusRepository {
  constructor(private readonly pool: Pool) {}

  async isDatabaseReachable(): Promise<boolean> {
    try {
      await this.pool.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}

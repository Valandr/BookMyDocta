export interface SystemStatusRepository {
  isDatabaseReachable(): Promise<boolean>;
}

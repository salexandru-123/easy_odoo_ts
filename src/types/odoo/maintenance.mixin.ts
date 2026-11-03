export interface TMaintenanceMixin {
  company_id?: number | false;
  effective_date: string;
  estimated_next_failure?: string;
  expected_mtbf?: number;
  latest_failure_date?: string;
  maintenance_count?: number;
  maintenance_ids?: number[];
  maintenance_open_count?: number;
  maintenance_team_id?: number | false;
  mtbf?: number;
  mttr?: number;
  technician_user_id?: number | false;
}
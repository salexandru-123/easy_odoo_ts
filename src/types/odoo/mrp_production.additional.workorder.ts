export interface Mrp_productionAdditionalWorkorder {
  blocked_by_workorder_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_start?: string;
  display_name?: string;
  duration_expected?: number;
  employee_assigned_ids?: number[];
  id?: number;
  name: string;
  production_id: number | false;
  workcenter_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
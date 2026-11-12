export interface THrPayslipEmployees {
  create_date?: string;
  create_uid?: number | false;
  department_id?: number | false;
  display_name?: string;
  employee_ids: number[];
  id?: number;
  job_id?: number | false;
  structure_id?: number | false;
  structure_type_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}

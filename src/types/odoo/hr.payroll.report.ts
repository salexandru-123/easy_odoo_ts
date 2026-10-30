export interface THrPayrollReport {
  basic_wage?: number;
  company_id?: number | false;
  count?: number;
  count_leave?: number;
  count_leave_unpaid?: number;
  count_unforeseen_absence?: number;
  count_work?: number;
  count_work_hours?: number;
  date_from?: string;
  date_to?: string;
  department_id?: number | false;
  display_name?: string;
  employee_id?: number | false;
  gross_wage?: number;
  id?: number;
  job_id?: number | false;
  leave_basic_wage?: number;
  master_department_id?: number | false;
  name?: string;
  net_wage?: number;
  number_of_days?: number;
  number_of_hours?: number;
  payslip_id?: number | false;
  type?: string;
  work_code?: number | false;
  work_entry_source?: string;
  work_type?: string;
}
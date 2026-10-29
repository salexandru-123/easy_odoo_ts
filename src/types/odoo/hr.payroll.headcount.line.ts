export interface HrPayrollHeadcountLine {
  contract_id: number | false;
  contract_names: string;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  department_id?: number | false;
  display_name?: string;
  employee_id: number | false;
  employee_type?: string;
  headcount_id: number | false;
  id?: number;
  job_id?: number | false;
  wage_on_payroll?: number;
  working_rate_ids: number[];
  write_date?: string;
  write_uid?: number | false;
}
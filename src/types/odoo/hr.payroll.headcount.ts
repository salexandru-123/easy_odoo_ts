export interface HrPayrollHeadcount {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_from: string;
  date_to?: string;
  display_name?: string;
  employee_count?: number;
  id?: number;
  is_name_custom?: boolean;
  line_ids?: number[];
  name?: string;
  write_date?: string;
  write_uid?: number | false;
}
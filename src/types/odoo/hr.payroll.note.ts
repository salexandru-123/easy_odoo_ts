export interface HrPayrollNote {
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  note: string;
  write_date?: string;
  write_uid?: number | false;
}
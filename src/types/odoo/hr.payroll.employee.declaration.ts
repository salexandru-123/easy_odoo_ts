export interface HrPayrollEmployeeDeclaration {
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  employee_id?: number | false;
  id?: number;
  pdf_file?: string | false;
  pdf_filename?: string;
  pdf_to_generate?: boolean;
  res_id: unknown;
  res_model: string;
  state?: string;
  write_date?: string;
  write_uid?: number | false;
}
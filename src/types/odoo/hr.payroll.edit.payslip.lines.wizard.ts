export interface THrPayrollEditPayslipLinesWizard {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  line_ids?: number[];
  payslip_id: number | false;
  worked_days_line_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
  ytd_computation?: boolean;
}

export interface AccountReportColumn {
  blank_if_zero?: boolean;
  create_date?: string;
  create_uid?: number | false;
  custom_audit_action_id?: number | false;
  display_name?: string;
  expression_label: string;
  figure_type: string;
  id?: number;
  name: string;
  report_id?: number | false;
  sequence?: number;
  sortable?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
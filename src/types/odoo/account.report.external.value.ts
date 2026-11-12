export interface TAccountReportExternalValue {
  carryover_origin_expression_label?: string;
  carryover_origin_report_line_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  date: string;
  display_name?: string;
  foreign_vat_fiscal_position_id?: number | false;
  id?: number;
  name: string;
  report_country_id?: number | false;
  target_report_expression_id: number | false;
  target_report_expression_label?: string;
  target_report_line_id?: number | false;
  text_value?: string;
  value?: number;
  write_date?: string;
  write_uid?: number | false;
}

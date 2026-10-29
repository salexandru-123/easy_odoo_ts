export interface SaleOrderTemplate {
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  journal_id?: number | false;
  mail_template_id?: number | false;
  name: string;
  note?: string;
  number_of_days?: number;
  prepayment_percent?: number;
  quotation_document_ids?: number[];
  require_payment?: boolean;
  require_signature?: boolean;
  sale_order_template_line_ids?: number[];
  sale_order_template_option_ids?: number[];
  sequence?: number;
  spreadsheet_template_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
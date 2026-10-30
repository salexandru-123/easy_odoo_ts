export interface TIrActionsReport {
  attachment?: string;
  attachment_use?: boolean;
  binding_model_id?: number | false;
  binding_type: string;
  binding_view_types?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  domain?: string;
  groups_id?: number[];
  help?: string;
  id?: number;
  is_invoice_report?: boolean;
  model: string;
  model_id?: number | false;
  multi?: boolean;
  name: string;
  paperformat_id?: number | false;
  path?: string;
  print_report_name?: string;
  report_file?: string;
  report_name: string;
  report_type: string;
  type: string;
  write_date?: string;
  write_uid?: number | false;
  xml_id?: string;
}
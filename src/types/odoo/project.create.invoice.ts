export interface ProjectCreateInvoice {
  _candidate_orders?: number[];
  amount_to_invoice?: number;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  id?: number;
  project_id: number | false;
  sale_order_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
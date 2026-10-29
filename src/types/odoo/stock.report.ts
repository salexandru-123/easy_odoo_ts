export interface StockReport {
  categ_id?: number | false;
  company_id?: number | false;
  creation_date?: string;
  cycle_time?: number;
  date_done?: string;
  delay?: number;
  display_name?: string;
  id?: number;
  is_backorder?: boolean;
  is_late?: boolean;
  operation_type_id?: number | false;
  partner_id?: number | false;
  picking_id?: number | false;
  picking_name?: string;
  picking_type_code?: string;
  product_id?: number | false;
  product_qty?: number;
  reference?: string;
  scheduled_date?: string;
  state?: string;
}
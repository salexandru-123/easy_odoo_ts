export interface ReportStockQuantity {
  company_id?: number | false;
  date?: string;
  display_name?: string;
  id?: number;
  product_id?: number | false;
  product_qty?: number;
  product_tmpl_id?: number | false;
  state?: string;
  warehouse_id?: number | false;
}
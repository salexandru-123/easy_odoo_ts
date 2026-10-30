export interface TVendorDelayReport {
  category_id?: number | false;
  date?: string;
  display_name?: string;
  id?: number;
  on_time_rate?: number;
  partner_id?: number | false;
  product_id?: number | false;
  qty_on_time?: number;
  qty_total?: number;
}
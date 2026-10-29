export interface StockRulesReport {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  product_has_variants: boolean;
  product_id: number | false;
  product_tmpl_id: number | false;
  so_route_ids?: number[];
  warehouse_ids: number[];
  write_date?: string;
  write_uid?: number | false;
}
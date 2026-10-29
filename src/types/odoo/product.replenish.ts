export interface ProductReplenish {
  allowed_route_ids?: number[];
  bom_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_planned: string;
  display_name?: string;
  forecast_uom_id?: number | false;
  forecasted_quantity?: number;
  id?: number;
  product_has_variants: boolean;
  product_id: number | false;
  product_tmpl_id: number | false;
  product_uom_category_id: number | false;
  product_uom_id: number | false;
  quantity: number;
  route_id?: number | false;
  show_bom?: boolean;
  show_vendor?: boolean;
  supplier_id?: number | false;
  warehouse_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
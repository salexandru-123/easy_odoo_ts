export interface StockRoute {
  active?: boolean;
  categ_ids?: number[];
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  packaging_ids?: number[];
  packaging_selectable?: boolean;
  product_categ_selectable?: boolean;
  product_ids?: number[];
  product_selectable?: boolean;
  rule_ids?: number[];
  sale_selectable?: boolean;
  sequence?: number;
  shipping_selectable?: boolean;
  supplied_wh_id?: number | false;
  supplier_wh_id?: number | false;
  warehouse_domain_ids?: number[];
  warehouse_ids?: number[];
  warehouse_selectable?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
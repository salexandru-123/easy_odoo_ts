export interface TProductLabelLayout {
  columns?: number;
  create_date?: string;
  create_uid?: number | false;
  custom_quantity: number;
  display_name?: string;
  extra_html?: string;
  id?: number;
  move_ids?: number[];
  move_quantity: string;
  pricelist_id?: number | false;
  print_format: string;
  product_ids?: number[];
  product_tmpl_ids?: number[];
  rows?: number;
  write_date?: string;
  write_uid?: number | false;
}

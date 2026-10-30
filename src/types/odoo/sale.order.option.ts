export interface TSaleOrderOption {
  create_date?: string;
  create_uid?: number | false;
  discount?: number;
  display_name?: string;
  id?: number;
  is_present?: boolean;
  line_id?: number | false;
  name: string;
  order_id?: number | false;
  price_unit: number;
  product_id: number | false;
  product_uom_category_id?: number | false;
  quantity: number;
  sequence?: number;
  uom_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
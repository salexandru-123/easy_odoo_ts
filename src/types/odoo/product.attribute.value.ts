export interface TProductAttributeValue {
  active?: boolean;
  attribute_id: number | false;
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  default_extra_price?: number;
  default_extra_price_changed?: boolean;
  display_name?: string;
  display_type?: string;
  html_color?: string;
  id?: number;
  image?: string | false;
  is_custom?: boolean;
  is_used_on_products?: boolean;
  name: string;
  pav_attribute_line_ids?: number[];
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}
export interface TProductAttribute {
  active?: boolean;
  attribute_line_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  create_variant: string;
  display_name?: string;
  display_type: string;
  id?: number;
  name: string;
  number_related_products?: number;
  product_tmpl_ids?: number[];
  sequence?: number;
  template_value_ids?: number[];
  value_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
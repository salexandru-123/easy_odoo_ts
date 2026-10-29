export interface ProductTemplateAttributeLine {
  active?: boolean;
  attribute_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  product_template_value_ids?: number[];
  product_tmpl_id: number | false;
  sequence?: number;
  value_count?: number;
  value_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
export interface TMrpBomByproduct {
  allowed_operation_ids?: number[];
  bom_id?: number | false;
  bom_product_template_attribute_value_ids?: number[];
  company_id?: number | false;
  cost_share?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  operation_id?: number | false;
  possible_bom_product_template_attribute_value_ids?: number[];
  product_id: number | false;
  product_qty: number;
  product_uom_category_id?: number | false;
  product_uom_id: number | false;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}
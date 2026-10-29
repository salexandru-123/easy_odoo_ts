export interface MrpBomLine {
  allowed_operation_ids?: number[];
  attachments_count?: number;
  bom_id: number | false;
  bom_product_template_attribute_value_ids?: number[];
  child_bom_id?: number | false;
  child_line_ids?: number[];
  company_id?: number | false;
  component_position?: string;
  cost_share?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  manual_consumption?: boolean;
  operation_id?: number | false;
  parent_product_tmpl_id?: number | false;
  possible_bom_product_template_attribute_value_ids?: number[];
  product_id: number | false;
  product_qty: number;
  product_tmpl_id?: number | false;
  product_uom_category_id?: number | false;
  product_uom_id: number | false;
  sequence?: number;
  tracking?: string;
  write_date?: string;
  write_uid?: number | false;
}
export interface SaleOrderTemplateLine {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  display_type?: string;
  id?: number;
  name?: string;
  product_id?: number | false;
  product_uom_category_id?: number | false;
  product_uom_id?: number | false;
  product_uom_qty: number;
  sale_order_template_id: number | false;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}
export interface SaleOrderTemplateOption {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  product_id: number | false;
  product_uom_category_id?: number | false;
  quantity: number;
  sale_order_template_id: number | false;
  uom_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
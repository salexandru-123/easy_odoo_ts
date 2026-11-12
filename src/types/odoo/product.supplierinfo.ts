export interface TProductSupplierinfo {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id: number | false;
  date_end?: string;
  date_start?: string;
  delay: number;
  discount?: number;
  display_name?: string;
  id?: number;
  last_purchase_date?: string;
  min_qty: number;
  partner_id: number | false;
  price: number;
  price_discounted?: number;
  product_code?: string;
  product_id?: number | false;
  product_name?: string;
  product_tmpl_id?: number | false;
  product_uom?: number | false;
  product_variant_count?: number;
  sequence?: number;
  show_set_supplier_button?: boolean;
  write_date?: string;
  write_uid?: number | false;
}

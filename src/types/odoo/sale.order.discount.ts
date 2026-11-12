export interface TSaleOrderDiscount {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  discount_amount?: number;
  discount_percentage?: number;
  discount_type?: string;
  display_name?: string;
  id?: number;
  sale_order_id: number | false;
  tax_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}

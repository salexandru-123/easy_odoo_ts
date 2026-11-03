export interface TPurchaseBillLineMatch {
  account_move_id?: number | false;
  aml_id?: number | false;
  billed_amount_untaxed?: number;
  company_id?: number | false;
  currency_id?: number | false;
  display_name?: string;
  id?: number;
  line_amount_untaxed?: number;
  line_qty?: number;
  line_uom_id?: number | false;
  partner_id?: number | false;
  pol_id?: number | false;
  product_id?: number | false;
  product_uom_id?: number | false;
  product_uom_price?: number;
  product_uom_qty?: number;
  purchase_amount_untaxed?: number;
  purchase_order_id?: number | false;
  qty_invoiced?: number;
  reference?: string;
  state?: string;
}
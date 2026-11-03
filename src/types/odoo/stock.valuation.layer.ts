export interface TStockValuationLayer {
  account_move_id?: number | false;
  account_move_line_id?: number | false;
  categ_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id: number | false;
  description?: string;
  display_name?: string;
  id?: number;
  lot_id?: number | false;
  price_diff_value?: number;
  product_id: number | false;
  product_tmpl_id?: number | false;
  quantity?: number;
  reference?: string;
  remaining_qty?: number;
  remaining_value?: number;
  stock_move_id?: number | false;
  stock_valuation_layer_id?: number | false;
  stock_valuation_layer_ids?: number[];
  unit_cost?: number;
  uom_id: number | false;
  value?: number;
  warehouse_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
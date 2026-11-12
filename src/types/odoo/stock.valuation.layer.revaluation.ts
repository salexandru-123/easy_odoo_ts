export interface TStockValuationLayerRevaluation {
  account_id?: number | false;
  account_journal_id?: number | false;
  added_value: number;
  adjusted_layer_ids?: number[];
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id: number | false;
  current_quantity_svl?: number;
  current_value_svl?: number;
  date?: string;
  display_name?: string;
  id?: number;
  lot_id?: number | false;
  new_value?: number;
  new_value_by_qty?: number;
  product_id: number | false;
  product_uom_name?: string;
  property_valuation?: string;
  reason?: string;
  write_date?: string;
  write_uid?: number | false;
}

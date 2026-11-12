export interface TStockReplenishmentInfo {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  json_lead_days?: string;
  json_replenishment_history?: string;
  orderpoint_id?: number | false;
  product_id?: number | false;
  qty_to_order?: number;
  supplierinfo_id?: number | false;
  supplierinfo_ids?: number[];
  warehouseinfo_ids?: number[];
  wh_replenishment_option_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}

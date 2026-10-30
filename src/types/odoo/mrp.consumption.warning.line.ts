export interface TMrpConsumptionWarningLine {
  consumption?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  mrp_consumption_warning_id: number | false;
  mrp_production_id: number | false;
  product_consumed_qty_uom?: number;
  product_expected_qty_uom?: number;
  product_id: number | false;
  product_uom_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
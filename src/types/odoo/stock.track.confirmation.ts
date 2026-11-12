export interface TStockTrackConfirmation {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  product_ids?: number[];
  quant_ids?: number[];
  tracking_line_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}

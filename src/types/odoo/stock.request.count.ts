export interface TStockRequestCount {
  accounting_date?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  inventory_date: string;
  quant_ids?: number[];
  set_count?: string;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
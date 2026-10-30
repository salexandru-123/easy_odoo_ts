export interface TStockWarnInsufficientQtyUnbuild {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  location_id: number | false;
  product_id: number | false;
  product_uom_name: string;
  quant_ids?: number[];
  quantity: number;
  unbuild_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
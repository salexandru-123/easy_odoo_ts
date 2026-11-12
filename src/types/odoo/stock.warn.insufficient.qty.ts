export interface TStockWarnInsufficientQty {
  location_id: number | false;
  product_id: number | false;
  product_uom_name: string;
  quant_ids?: number[];
  quantity: number;
}

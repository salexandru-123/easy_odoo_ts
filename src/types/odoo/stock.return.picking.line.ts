export interface StockReturnPickingLine {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  move_id?: number | false;
  move_quantity?: number;
  product_id: number | false;
  quantity: number;
  to_refund?: boolean;
  uom_id?: number | false;
  wizard_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
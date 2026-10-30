export interface TStockLotReport {
  address?: string;
  delivery_date?: string;
  display_name?: string;
  has_return?: boolean;
  id?: number;
  lot_id?: number | false;
  partner_id?: number | false;
  picking_id?: number | false;
  product_id?: number | false;
  quantity?: number;
  uom_id?: number | false;
}
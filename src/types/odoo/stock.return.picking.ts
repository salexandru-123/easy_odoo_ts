export interface StockReturnPicking {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  picking_id?: number | false;
  picking_type_code?: string;
  product_return_moves?: number[];
  write_date?: string;
  write_uid?: number | false;
}
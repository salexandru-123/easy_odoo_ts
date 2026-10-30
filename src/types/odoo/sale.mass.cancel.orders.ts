export interface TSaleMassCancelOrders {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  has_confirmed_order?: boolean;
  id?: number;
  sale_order_ids?: number[];
  sale_orders_count?: number;
  write_date?: string;
  write_uid?: number | false;
}
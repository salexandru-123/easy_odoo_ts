export interface TStockDeliveryNoteLine {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id: number | false;
  delivery_note_id: number | false;
  discount?: number;
  display_name?: string;
  display_type?: string;
  id?: number;
  invoice_status: string;
  move_id?: number | false;
  name: string;
  price_unit?: number;
  product_description?: string;
  product_id?: number | false;
  product_qty?: number;
  product_uom_id?: number | false;
  sale_line_id?: number | false;
  sale_order_client_ref?: string;
  sale_order_number?: string;
  sequence: number;
  tax_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}

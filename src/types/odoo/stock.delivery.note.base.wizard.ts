export interface StockDeliveryNoteBaseWizard {
  date?: string;
  error_message?: string;
  partner_id?: number | false;
  partner_sender_id?: number | false;
  partner_shipping_id?: number | false;
  selected_picking_ids?: number[];
  type_id?: number | false;
  warning_message?: string;
}
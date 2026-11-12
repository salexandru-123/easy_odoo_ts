export interface TStockDeliveryNoteSelectWizard {
  create_date?: string;
  create_uid?: number | false;
  date?: string;
  delivery_note_id: number | false;
  display_name?: string;
  error_message?: string;
  id?: number;
  partner_id?: number | false;
  partner_sender_id?: number | false;
  partner_shipping_id?: number | false;
  picking_ids?: number[];
  selected_picking_ids?: number[];
  type_id?: number | false;
  warning_message?: string;
  write_date?: string;
  write_uid?: number | false;
}

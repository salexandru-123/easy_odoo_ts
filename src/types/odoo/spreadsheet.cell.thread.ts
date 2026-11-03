export interface TSpreadsheetCellThread {
  create_date?: string;
  create_uid?: number | false;
  dashboard_id?: number | false;
  display_name?: string;
  has_message?: boolean;
  id?: number;
  message_attachment_count?: number;
  message_follower_ids?: number[];
  message_has_error?: boolean;
  message_has_error_counter?: number;
  message_has_sms_error?: boolean;
  message_ids?: number[];
  message_is_follower?: boolean;
  message_needaction?: boolean;
  message_needaction_counter?: number;
  message_partner_ids?: number[];
  sale_order_spreadsheet_id?: number | false;
  website_message_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
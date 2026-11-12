export interface TMailTrackingValue {
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  field_id?: number | false;
  field_info?: unknown;
  id?: number;
  mail_message_id: number | false;
  new_value_char?: string;
  new_value_datetime?: string;
  new_value_float?: number;
  new_value_integer?: number;
  new_value_text?: string;
  old_value_char?: string;
  old_value_datetime?: string;
  old_value_float?: number;
  old_value_integer?: number;
  old_value_text?: string;
  write_date?: string;
  write_uid?: number | false;
}

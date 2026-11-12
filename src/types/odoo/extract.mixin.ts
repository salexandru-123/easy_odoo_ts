export interface TExtractMixin {
  extract_can_show_send_button?: boolean;
  extract_document_uuid?: string;
  extract_error_message?: string;
  extract_state?: string;
  extract_state_processed?: boolean;
  extract_status?: string;
  has_message?: boolean;
  is_in_extractable_state?: boolean;
  message_attachment_count?: number;
  message_follower_ids?: number[];
  message_has_error?: boolean;
  message_has_error_counter?: number;
  message_has_sms_error?: boolean;
  message_ids?: number[];
  message_is_follower?: boolean;
  message_main_attachment_id?: number | false;
  message_needaction?: boolean;
  message_needaction_counter?: number;
  message_partner_ids?: number[];
  website_message_ids?: number[];
}

export interface TMailThread {
  has_message?: boolean;
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
  rating_ids?: number[];
  website_message_ids?: number[];
}
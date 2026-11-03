export interface TKnowledgeArticleThread {
  article_anchor_text?: string;
  article_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  has_message?: boolean;
  id?: number;
  is_resolved?: boolean;
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
  write_date?: string;
  write_uid?: number | false;
}
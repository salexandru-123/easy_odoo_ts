export interface SignSendRequest {
  activity_id?: number | false;
  attachment_ids?: number[];
  cc_partner_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  filename: string;
  has_default_template?: boolean;
  id?: number;
  is_user_signer?: boolean;
  message?: string;
  message_cc?: string;
  reference_doc?: string;
  reminder?: number;
  reminder_enabled?: boolean;
  set_sign_order?: boolean;
  signer_id?: number | false;
  signer_ids?: number[];
  signers_count?: number;
  subject: string;
  template_id: number | false;
  validity?: string;
  write_date?: string;
  write_uid?: number | false;
}
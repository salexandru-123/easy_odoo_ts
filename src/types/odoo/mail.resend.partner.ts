export interface TMailResendPartner {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  email?: string;
  failure_reason?: string;
  id?: number;
  message?: string;
  name?: string;
  notification_id: number | false;
  partner_id?: number | false;
  partner_readonly?: boolean;
  resend?: boolean;
  resend_wizard_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}

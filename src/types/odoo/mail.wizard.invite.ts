export interface MailWizardInvite {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  message?: string;
  notify?: boolean;
  partner_ids?: number[];
  res_id?: number;
  res_model: string;
  write_date?: string;
  write_uid?: number | false;
}
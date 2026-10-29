export interface PortalWizardUser {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  email?: string;
  email_state?: string;
  id?: number;
  is_internal?: boolean;
  is_portal?: boolean;
  login_date?: string;
  partner_id: number | false;
  user_id?: number | false;
  wizard_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
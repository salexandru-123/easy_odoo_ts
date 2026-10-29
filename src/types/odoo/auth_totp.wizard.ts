export interface Auth_totpWizard {
  code?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  qrcode?: string | false;
  secret: string;
  url?: string;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
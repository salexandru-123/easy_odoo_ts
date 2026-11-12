export interface TIrMail_server {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  from_filter?: string;
  google_gmail_access_token?: string;
  google_gmail_access_token_expiration?: number;
  google_gmail_authorization_code?: string;
  google_gmail_refresh_token?: string;
  google_gmail_uri?: string;
  id?: number;
  mail_template_ids?: number[];
  max_email_size?: number;
  name: string;
  sequence?: number;
  smtp_authentication: string;
  smtp_authentication_info?: string;
  smtp_debug?: boolean;
  smtp_encryption: string;
  smtp_host?: string;
  smtp_pass?: string;
  smtp_port?: number;
  smtp_ssl_certificate?: string | false;
  smtp_ssl_private_key?: string | false;
  smtp_user?: string;
  write_date?: string;
  write_uid?: number | false;
}

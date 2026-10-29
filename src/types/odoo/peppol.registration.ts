export interface PeppolRegistration {
  account_peppol_migration_key?: string;
  account_peppol_proxy_state?: string;
  company_id: number | false;
  contact_email: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  edi_mode?: string;
  edi_mode_constraint?: string;
  edi_user_id?: number | false;
  id?: number;
  peppol_eas: string;
  peppol_endpoint: string;
  peppol_warnings?: unknown;
  phone_number?: string;
  smp_registration?: boolean;
  verification_code?: string;
  write_date?: string;
  write_uid?: number | false;
}
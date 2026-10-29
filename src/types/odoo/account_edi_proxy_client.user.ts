export interface Account_edi_proxy_clientUser {
  active?: boolean;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  edi_identification: string;
  edi_mode?: string;
  id?: number;
  id_client: string;
  peppol_verification_code?: string;
  private_key_id: number | false;
  proxy_type: string;
  refresh_token?: string;
  write_date?: string;
  write_uid?: number | false;
}
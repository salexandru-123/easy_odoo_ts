export interface TCertificateCertificate {
  active?: boolean;
  company_id: number | false;
  content: string | false;
  content_format?: string;
  country_code?: string;
  create_date?: string;
  create_uid?: number | false;
  date_end?: string;
  date_start?: string;
  display_name?: string;
  id?: number;
  is_valid?: boolean;
  loading_error?: string;
  name?: string;
  pem_certificate?: string | false;
  pkcs12_password?: string;
  private_key_id?: number | false;
  public_key_id?: number | false;
  scope?: string;
  serial_number?: string;
  subject_common_name?: string;
  write_date?: string;
  write_uid?: number | false;
}

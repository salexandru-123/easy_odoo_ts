export interface TCertificateKey {
  active?: boolean;
  company_id: number | false;
  content: string | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  loading_error?: string;
  name?: string;
  password?: string;
  pem_key?: string | false;
  public?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
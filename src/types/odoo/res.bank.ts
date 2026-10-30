export interface TResBank {
  active?: boolean;
  bic?: string;
  city?: string;
  country?: number | false;
  country_code?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  email?: string;
  id?: number;
  name: string;
  phone?: string;
  state?: number | false;
  street?: string;
  street2?: string;
  write_date?: string;
  write_uid?: number | false;
  zip?: string;
}
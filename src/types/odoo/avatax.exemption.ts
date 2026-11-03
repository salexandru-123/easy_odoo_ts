export interface TAvataxExemption {
  code: string;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  id?: number;
  name: string;
  valid_country_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
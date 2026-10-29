export interface HrPayslipInputType {
  active?: boolean;
  available_in_attachments?: boolean;
  code: string;
  country_code?: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  default_no_end_date?: boolean;
  display_name?: string;
  id?: number;
  is_quantity?: boolean;
  name: string;
  struct_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
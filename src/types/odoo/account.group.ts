export interface AccountGroup {
  code_prefix_end?: string;
  code_prefix_start?: string;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  parent_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
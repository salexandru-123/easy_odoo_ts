export interface ResPartnerCategory {
  active?: boolean;
  child_ids?: number[];
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  parent_id?: number | false;
  parent_path?: string;
  partner_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
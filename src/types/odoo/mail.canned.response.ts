export interface TMailCannedResponse {
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  group_ids?: number[];
  id?: number;
  is_editable?: boolean;
  is_shared?: boolean;
  last_used?: string;
  source: string;
  substitution: string;
  write_date?: string;
  write_uid?: number | false;
}
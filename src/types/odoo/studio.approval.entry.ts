export interface TStudioApprovalEntry {
  action_id?: number | false;
  approved?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  method?: string;
  model?: string;
  name?: string;
  reference?: string;
  res_id: unknown;
  rule_id: number | false;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}

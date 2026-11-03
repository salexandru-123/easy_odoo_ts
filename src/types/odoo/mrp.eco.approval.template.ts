export interface TMrpEcoApprovalTemplate {
  approval_type: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  sequence?: number;
  stage_id: number | false;
  user_ids: number[];
  write_date?: string;
  write_uid?: number | false;
}
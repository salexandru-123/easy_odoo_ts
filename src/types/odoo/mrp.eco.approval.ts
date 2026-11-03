export interface TMrpEcoApproval {
  approval_date?: string;
  approval_template_id: number | false;
  awaiting_my_validation?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  eco_id: number | false;
  eco_stage_id?: number | false;
  id?: number;
  is_approved?: boolean;
  is_closed?: boolean;
  is_rejected?: boolean;
  name?: string;
  required_user_ids?: number[];
  status: string;
  template_stage_id?: number | false;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
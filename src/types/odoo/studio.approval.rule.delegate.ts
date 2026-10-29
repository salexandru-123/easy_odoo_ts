export interface StudioApprovalRuleDelegate {
  approval_rule_id: number | false;
  approver_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  date_to?: string;
  display_name?: string;
  id?: number;
  users_to_notify?: number[];
  write_date?: string;
  write_uid?: number | false;
}
export interface TApprovalCategoryApprover {
  category_id: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  existing_user_ids?: number[];
  id?: number;
  required?: boolean;
  sequence?: number;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
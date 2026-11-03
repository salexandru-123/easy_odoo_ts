export interface TMrpEcoStage {
  allow_apply_change?: boolean;
  approval_roles?: string;
  approval_template_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  final_stage?: boolean;
  folded?: boolean;
  id?: number;
  is_blocking?: boolean;
  legend_blocked: string;
  legend_done: string;
  legend_normal: string;
  name: string;
  sequence?: number;
  type_ids: number[];
  write_date?: string;
  write_uid?: number | false;
}
export interface HrSkillType {
  active?: boolean;
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  skill_ids?: number[];
  skill_level_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
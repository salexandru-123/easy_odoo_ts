export interface TIrRule {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  domain_force?: string;
  global?: boolean;
  groups?: number[];
  id?: number;
  model_id: number | false;
  name?: string;
  perm_create?: boolean;
  perm_read?: boolean;
  perm_unlink?: boolean;
  perm_write?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
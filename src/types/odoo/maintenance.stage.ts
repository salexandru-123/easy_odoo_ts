export interface TMaintenanceStage {
  create_date?: string;
  create_leaves?: boolean;
  create_uid?: number | false;
  display_name?: string;
  done?: boolean;
  fold?: boolean;
  id?: number;
  name: string;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}

export interface TQualityAlertStage {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  done?: boolean;
  folded?: boolean;
  id?: number;
  name: string;
  sequence?: number;
  team_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
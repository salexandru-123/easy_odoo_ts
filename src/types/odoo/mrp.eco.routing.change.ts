export interface TMrpEcoRoutingChange {
  change_type: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  eco_id: number | false;
  id?: number;
  operation_id?: number | false;
  operation_name?: string;
  quality_point_id?: number | false;
  step?: string;
  test_type?: number | false;
  title?: string;
  upd_time_cycle_manual?: number;
  upd_time_mode?: string;
  upd_time_mode_batch?: number;
  workcenter_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}

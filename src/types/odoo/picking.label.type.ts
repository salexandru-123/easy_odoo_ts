export interface TPickingLabelType {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  label_type: string;
  picking_ids?: number[];
  production_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
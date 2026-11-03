export interface TStockPackage_level {
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_done?: boolean;
  is_fresh_package?: boolean;
  location_dest_id?: number | false;
  location_id?: number | false;
  move_ids?: number[];
  move_line_ids?: number[];
  package_id: number | false;
  picking_id?: number | false;
  picking_type_code?: string;
  show_lots_m2o?: boolean;
  show_lots_text?: boolean;
  state?: string;
  write_date?: string;
  write_uid?: number | false;
}
export interface StockPackageDestination {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  filtered_location?: number[];
  id?: number;
  location_dest_id: number | false;
  move_line_ids: number[];
  picking_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
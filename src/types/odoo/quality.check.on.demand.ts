export interface TQualityCheckOnDemand {
  allowed_product_ids?: number[];
  allowed_quality_point_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  lot_id?: number | false;
  measure_on?: string;
  picking_id?: number | false;
  product_id?: number | false;
  production_id?: number | false;
  quality_point_id: number | false;
  show_lot_number?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
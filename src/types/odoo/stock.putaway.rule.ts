export interface TStockPutawayRule {
  active?: boolean;
  category_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  location_in_id: number | false;
  location_out_id: number | false;
  package_type_ids?: number[];
  product_id?: number | false;
  sequence?: number;
  storage_category_id?: number | false;
  sublocation?: string;
  write_date?: string;
  write_uid?: number | false;
}
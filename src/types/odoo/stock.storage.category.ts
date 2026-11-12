export interface TStockStorageCategory {
  allow_new_product: string;
  capacity_ids?: number[];
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  location_ids?: number[];
  max_weight?: number;
  name: string;
  package_capacity_ids?: number[];
  product_capacity_ids?: number[];
  weight_uom_name?: string;
  write_date?: string;
  write_uid?: number | false;
}

export interface StockPackageType {
  barcode?: string;
  base_weight?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  height?: number;
  id?: number;
  length_uom_name?: string;
  max_weight?: number;
  name: string;
  package_carrier_type?: string;
  packaging_length?: number;
  sequence?: number;
  shipper_package_code?: string;
  storage_category_capacity_ids?: number[];
  weight_uom_name?: string;
  width?: number;
  write_date?: string;
  write_uid?: number | false;
}
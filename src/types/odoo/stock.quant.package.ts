export interface TStockQuantPackage {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  location_id?: number | false;
  name: string;
  owner_id?: number | false;
  pack_date?: string;
  package_type_id?: number | false;
  package_use: string;
  quant_ids?: number[];
  shipping_weight?: number;
  valid_sscc?: boolean;
  weight?: number;
  weight_is_kg?: boolean;
  weight_uom_name?: string;
  weight_uom_rounding?: number;
  write_date?: string;
  write_uid?: number | false;
}

export interface TProductPackaging {
  barcode?: string;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  package_type_id?: number | false;
  product_id: number | false;
  product_uom_id?: number | false;
  purchase?: boolean;
  qty?: number;
  route_ids?: number[];
  sales?: boolean;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}

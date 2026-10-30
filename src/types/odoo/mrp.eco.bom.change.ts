export interface TMrpEcoBomChange {
  bom_line_id?: number | false;
  byproduct_id?: number | false;
  change_type: string;
  company_id?: number | false;
  conflict?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  eco_id?: number | false;
  eco_rebase_id?: number | false;
  id?: number;
  new_operation_id?: number | false;
  new_product_qty?: number;
  new_uom_id?: number | false;
  old_operation_id?: number | false;
  old_product_qty?: number;
  old_uom_id?: number | false;
  operation_change?: string;
  product_id: number | false;
  rebase_id?: number | false;
  uom_change?: string;
  upd_product_qty?: number;
  write_date?: string;
  write_uid?: number | false;
}
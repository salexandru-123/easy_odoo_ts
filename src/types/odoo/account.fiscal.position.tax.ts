export interface AccountFiscalPositionTax {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  position_id: number | false;
  tax_dest_active?: boolean;
  tax_dest_id?: number | false;
  tax_src_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
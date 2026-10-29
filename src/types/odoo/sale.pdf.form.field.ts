export interface SalePdfFormField {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  document_type: string;
  id?: number;
  name: string;
  path?: string;
  product_document_ids?: number[];
  quotation_document_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
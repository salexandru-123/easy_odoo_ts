export interface SignDuplicateTemplatePdf {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  new_pdf: string | false;
  new_template?: string;
  original_template_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
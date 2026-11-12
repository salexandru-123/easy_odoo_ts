export interface THrPayrollDeclarationMixin {
  company_id?: number | false;
  line_ids?: number[];
  lines_count?: number;
  pdf_error?: string;
  year: string;
}

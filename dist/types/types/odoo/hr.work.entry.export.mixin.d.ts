export interface THrWorkEntryExportMixin {
    company_id: number | false;
    create_uid?: number | false;
    eligible_employee_count?: number;
    eligible_employee_line_ids?: number[];
    export_file?: string | false;
    export_filename?: string;
    period_start?: string;
    period_stop?: string;
    reference_month: string;
    reference_year: number;
}

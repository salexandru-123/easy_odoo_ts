export interface THrPayrollPaymentReportWizard {
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    export_format: string;
    id?: number;
    payslip_ids: number[];
    payslip_run_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

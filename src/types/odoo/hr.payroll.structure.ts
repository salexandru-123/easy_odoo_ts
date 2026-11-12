export interface THrPayrollStructure {
    active?: boolean;
    code?: string;
    country_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    hide_basic_on_pdf?: boolean;
    id?: number;
    input_line_type_ids?: number[];
    journal_id?: number | false;
    name: string;
    note?: string;
    payslip_name?: string;
    report_id?: number | false;
    rule_ids?: number[];
    schedule_pay?: string;
    type_id: number | false;
    unpaid_work_entry_type_ids?: number[];
    use_worked_day_lines?: boolean;
    write_date?: string;
    write_uid?: number | false;
    ytd_computation?: boolean;
}

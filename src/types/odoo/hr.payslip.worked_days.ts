export interface THrPayslipWorked_days {
    amount?: number;
    code?: string;
    contract_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    display_name?: string;
    id?: number;
    is_credit_time?: boolean;
    is_paid?: boolean;
    name?: string;
    number_of_days?: number;
    number_of_hours?: number;
    payslip_id: number | false;
    sequence: number;
    work_entry_type_id: number | false;
    write_date?: string;
    write_uid?: number | false;
    ytd?: number;
}

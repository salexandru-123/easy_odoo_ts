export interface THrPayslipInput {
    _allowed_input_type_ids?: number[];
    amount?: number;
    code: string;
    contract_id: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    input_type_id: number | false;
    name?: string;
    payslip_id: number | false;
    sequence: number;
    write_date?: string;
    write_uid?: number | false;
}

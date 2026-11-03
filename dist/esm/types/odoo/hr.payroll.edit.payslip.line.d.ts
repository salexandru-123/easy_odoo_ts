export interface THrPayrollEditPayslipLine {
    amount?: number;
    category_id?: number | false;
    code?: string;
    contract_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    edit_payslip_lines_wizard_id: number | false;
    employee_id?: number | false;
    id?: number;
    name?: string;
    quantity?: number;
    rate?: number;
    salary_rule_id?: number | false;
    sequence?: number;
    slip_id?: number | false;
    struct_id?: number | false;
    total?: number;
    write_date?: string;
    write_uid?: number | false;
    ytd?: number;
}

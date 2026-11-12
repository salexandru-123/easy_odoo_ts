export interface THrContractEmployeeReport {
    age_sum?: number;
    company_id?: number | false;
    contract_id?: number | false;
    contract_start?: string;
    count_employee_exit?: number;
    count_new_employee?: number;
    date?: string;
    date_end_contract?: string;
    department_id?: number | false;
    departure_reason_id?: number | false;
    display_name?: string;
    employee_count?: number;
    employee_id?: number | false;
    end_date_months?: number;
    id?: number;
    start_date_months?: number;
    wage?: number;
}

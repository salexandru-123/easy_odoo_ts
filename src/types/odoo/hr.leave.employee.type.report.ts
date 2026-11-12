export interface THrLeaveEmployeeTypeReport {
    active_employee?: boolean;
    company_id?: number | false;
    date_from?: string;
    date_to?: string;
    department_id?: number | false;
    display_name?: string;
    employee_id?: number | false;
    holiday_status?: string;
    id?: number;
    leave_type?: number | false;
    number_of_days?: number;
    number_of_hours?: number;
    state?: string;
}

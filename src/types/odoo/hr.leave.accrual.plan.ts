export interface THrLeaveAccrualPlan {
    accrued_gain_time: string;
    active?: boolean;
    added_value_type?: string;
    allocation_ids?: number[];
    carryover_date: string;
    carryover_day?: number;
    carryover_day_display?: string;
    carryover_month?: string;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    employees_count?: number;
    id?: number;
    is_based_on_worked_time?: boolean;
    level_count?: number;
    level_ids?: number[];
    name: string;
    show_transition_mode?: boolean;
    time_off_type_id?: number | false;
    transition_mode: string;
    write_date?: string;
    write_uid?: number | false;
}

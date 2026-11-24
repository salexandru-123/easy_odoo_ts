export interface TMailActivityPlanTemplate {
    activity_type_id?: number | false;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    delay_count?: number;
    delay_from?: 'before_plan_date' | 'after_plan_date';
    delay_unit?: 'days' | 'weeks' | 'months';
    display_name?: string;
    icon?: string;
    id?: number;
    note?: string;
    plan_id: number | false;
    res_model?: '';
    responsible_id?: number | false;
    responsible_type?: 'on_demand' | 'other' | 'coach' | 'manager' | 'employee';
    sequence?: number;
    summary?: string;
    write_date?: string;
    write_uid?: number | false;
}

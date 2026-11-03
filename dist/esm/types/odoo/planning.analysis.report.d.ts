export interface TPlanningAnalysisReport {
    allocated_hours?: number;
    allocated_percentage?: number;
    company_id?: number | false;
    department_id?: number | false;
    display_name?: string;
    employee_id?: number | false;
    employee_skill_ids?: number[];
    end_datetime?: string;
    id?: number;
    job_title?: string;
    manager_id?: number | false;
    name?: string;
    publication_warning?: boolean;
    recurrency_id?: number | false;
    request_to_switch?: boolean;
    resource_id?: number | false;
    resource_type?: string;
    role_id?: number | false;
    role_product_ids?: number[];
    sale_line_id?: number | false;
    sale_order_id?: number | false;
    slot_id?: number | false;
    start_datetime?: string;
    state?: string;
    user_id?: number | false;
}

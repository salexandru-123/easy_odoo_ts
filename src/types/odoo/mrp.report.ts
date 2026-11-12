export interface TMrpReport {
    byproduct_cost?: number;
    company_id?: number | false;
    component_cost?: number;
    currency_id: number | false;
    date_finished?: string;
    display_name?: string;
    duration?: number;
    employee_cost?: number;
    expected_component_cost_unit?: number;
    expected_employee_cost_unit?: number;
    expected_operation_cost_unit?: number;
    expected_total_cost_unit?: number;
    id?: number;
    operation_cost?: number;
    product_id?: number | false;
    production_id?: number | false;
    qty_demanded?: number;
    qty_produced?: number;
    total_cost?: number;
    unit_component_cost?: number;
    unit_cost?: number;
    unit_duration?: number;
    unit_employee_cost?: number;
    unit_operation_cost?: number;
    yield_rate?: number;
}

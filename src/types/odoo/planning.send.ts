export interface TPlanningSend {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    employee_ids?: number[];
    employees_no_email?: number[];
    end_datetime: string;
    id?: number;
    include_unassigned?: boolean;
    note?: string;
    slot_ids?: number[];
    start_datetime: string;
    write_date?: string;
    write_uid?: number | false;
}

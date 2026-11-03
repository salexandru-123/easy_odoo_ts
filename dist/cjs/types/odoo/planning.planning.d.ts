export interface TPlanningPlanning {
    access_token: string;
    allow_self_unassign?: boolean;
    company_id: number | false;
    create_date?: string;
    create_uid?: number | false;
    date_end?: string;
    date_start?: string;
    display_name?: string;
    end_datetime: string;
    id?: number;
    include_unassigned?: boolean;
    self_unassign_days_before?: number;
    start_datetime: string;
    write_date?: string;
    write_uid?: number | false;
}

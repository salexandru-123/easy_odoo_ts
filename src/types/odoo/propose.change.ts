export interface TProposeChange {
    change_type?: string;
    comment?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    note?: string;
    picture?: string | false;
    step_id?: number | false;
    title?: string;
    workorder_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

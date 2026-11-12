export interface TAccountFullReconcile {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    exchange_move_id?: number | false;
    id?: number;
    partial_reconcile_ids?: number[];
    reconciled_line_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

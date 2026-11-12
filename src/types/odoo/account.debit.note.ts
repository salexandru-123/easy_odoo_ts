export interface TAccountDebitNote {
    copy_lines?: boolean;
    country_code?: string;
    create_date?: string;
    create_uid?: number | false;
    date: string;
    display_name?: string;
    id?: number;
    journal_id?: number | false;
    journal_type?: string;
    move_ids?: number[];
    move_type?: string;
    reason?: string;
    write_date?: string;
    write_uid?: number | false;
}

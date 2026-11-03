export interface TAccountResequenceWizard {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    end_date?: string;
    first_date?: string;
    first_name: string;
    id?: number;
    move_ids?: number[];
    new_values?: string;
    ordering: string;
    preview_moves?: string;
    sequence_number_reset?: string;
    write_date?: string;
    write_uid?: number | false;
}

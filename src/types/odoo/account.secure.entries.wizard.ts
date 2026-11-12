export interface TAccountSecureEntriesWizard {
    chains_to_hash_with_gaps?: unknown;
    company_id: number | false;
    country_code?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    hash_date: string;
    id?: number;
    max_hash_date?: string;
    move_to_hash_ids?: number[];
    not_hashable_unlocked_move_ids?: number[];
    unreconciled_bank_statement_line_ids?: number[];
    warnings?: unknown;
    write_date?: string;
    write_uid?: number | false;
}

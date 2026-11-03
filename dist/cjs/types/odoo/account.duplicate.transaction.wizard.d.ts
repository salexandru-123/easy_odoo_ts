export interface TAccountDuplicateTransactionWizard {
    create_date?: string;
    create_uid?: number | false;
    date?: string;
    display_name?: string;
    first_ids_in_group?: unknown;
    id?: number;
    journal_id?: number | false;
    transaction_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

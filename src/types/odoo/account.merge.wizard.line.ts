export interface TAccountMergeWizardLine {
    account_has_hashed_entries?: boolean;
    account_id?: number | false;
    company_ids?: number[];
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    display_type: string;
    grouping_key?: string;
    id?: number;
    info?: string;
    is_selected?: boolean;
    sequence?: number;
    wizard_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

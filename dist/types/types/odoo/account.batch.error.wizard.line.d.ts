export interface TAccountBatchErrorWizardLine {
    create_date?: string;
    create_uid?: number | false;
    description: string;
    display_name?: string;
    error_wizard_id?: number | false;
    help_message?: string;
    id?: number;
    payment_ids: number[];
    show_remove_button?: boolean;
    warning_wizard_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

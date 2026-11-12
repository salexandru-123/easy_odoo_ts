export interface TPrivacyLookupWizardLine {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    execution_details?: string;
    has_active?: boolean;
    id?: number;
    is_active?: boolean;
    is_unlinked?: boolean;
    res_id: number;
    res_model?: string;
    res_model_id?: number | false;
    res_name?: string;
    resource_ref?: unknown;
    wizard_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

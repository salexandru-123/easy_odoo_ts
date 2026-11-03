export interface TSmsComposer {
    body: string;
    comment_single_recipient?: boolean;
    composition_mode: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    mass_force_send?: boolean;
    mass_keep_log?: boolean;
    mass_use_blacklist?: boolean;
    number_field_name?: string;
    numbers?: string;
    recipient_invalid_count?: number;
    recipient_single_description?: string;
    recipient_single_number?: string;
    recipient_single_number_itf?: string;
    recipient_single_valid?: boolean;
    recipient_valid_count?: number;
    res_id?: number;
    res_ids?: string;
    res_ids_count?: number;
    res_model?: string;
    res_model_description?: string;
    sanitized_numbers?: string;
    template_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

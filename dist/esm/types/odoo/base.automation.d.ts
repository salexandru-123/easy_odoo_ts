export interface TBaseAutomation {
    action_server_ids?: number[];
    active?: boolean;
    create_date?: string;
    create_uid?: number | false;
    description?: string;
    display_name?: string;
    filter_domain?: string;
    filter_pre_domain?: string;
    id?: number;
    last_run?: string;
    least_delay_msg?: string;
    log_webhook_calls?: boolean;
    model_id: number | false;
    model_is_mail_thread?: boolean;
    model_name?: string;
    name: string;
    on_change_field_ids?: number[];
    record_getter?: string;
    trg_date_calendar_id?: number | false;
    trg_date_id?: number | false;
    trg_date_range?: number;
    trg_date_range_type?: 'minutes' | 'hour' | 'day' | 'month';
    trg_field_ref?: unknown;
    trg_field_ref_model_name?: string;
    trg_selection_field_id?: number | false;
    trigger:
        | 'on_stage_set'
        | 'on_user_set'
        | 'on_tag_set'
        | 'on_state_set'
        | 'on_priority_set'
        | 'on_archive'
        | 'on_unarchive'
        | 'on_create_or_write'
        | 'on_create'
        | 'on_write'
        | 'on_unlink'
        | 'on_change'
        | 'on_time'
        | 'on_time_created'
        | 'on_time_updated'
        | 'on_message_received'
        | 'on_message_sent'
        | 'on_webhook';
    trigger_field_ids?: number[];
    url?: string;
    webhook_uuid?: string;
    write_date?: string;
    write_uid?: number | false;
}

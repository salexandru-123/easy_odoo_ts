export interface TIrActionsServer {
    activity_date_deadline_range?: number;
    activity_date_deadline_range_type?: 'days' | 'weeks' | 'months';
    activity_note?: string;
    activity_summary?: string;
    activity_type_id?: number | false;
    activity_user_field_name?: string;
    activity_user_id?: number | false;
    activity_user_type?: 'specific' | 'generic';
    available_model_ids?: number[];
    base_automation_id?: number | false;
    binding_model_id?: number | false;
    binding_type?: 'action' | 'report';
    binding_view_types?: string;
    child_ids?: number[];
    code?: string;
    create_date?: string;
    create_uid?: number | false;
    crud_model_id?: number | false;
    crud_model_name?: string;
    display_name?: string;
    evaluation_type?: 'value' | 'equation';
    groups_id?: number[];
    help?: string;
    id?: number;
    link_field_id?: number | false;
    mail_post_autofollow?: boolean;
    mail_post_method?: 'email' | 'comment' | 'note';
    model_id: number | false;
    model_name?: string;
    name: string;
    partner_ids?: number[];
    path?: string;
    resource_ref?: unknown;
    selection_value?: number | false;
    sequence?: number;
    sms_method?: 'sms' | 'comment' | 'note';
    sms_template_id?: number | false;
    state?:
        | 'object_write'
        | 'next_activity'
        | 'mail_post'
        | 'sms'
        | 'followers'
        | 'remove_followers'
        | 'object_create'
        | 'code'
        | 'webhook'
        | 'multi';
    template_id?: number | false;
    type?: string;
    update_boolean_value?: 'true' | 'false';
    update_field_id?: number | false;
    update_field_type?: '';
    update_m2m_operation?: 'add' | 'remove' | 'set' | 'clear';
    update_path?: string;
    update_related_model_id?: number | false;
    usage?: 'ir_actions_server' | 'ir_cron' | 'base_automation';
    value?: string;
    value_field_to_show?: 'value' | 'resource_ref' | 'update_boolean_value' | 'selection_value';
    webhook_field_ids?: number[];
    webhook_sample_payload?: string;
    webhook_url?: string;
    write_date?: string;
    write_uid?: number | false;
    xml_id?: string;
}

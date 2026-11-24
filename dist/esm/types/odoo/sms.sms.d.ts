export interface TSmsSms {
    body?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    failure_type?:
        | 'unknown'
        | 'sms_number_missing'
        | 'sms_number_format'
        | 'sms_country_not_supported'
        | 'sms_registration_needed'
        | 'sms_credit'
        | 'sms_server'
        | 'sms_acc'
        | 'sms_blacklist'
        | 'sms_duplicate'
        | 'sms_optout';
    id?: number;
    mail_message_id?: number | false;
    number?: string;
    partner_id?: number | false;
    sms_tracker_id?: number | false;
    state?: 'outgoing' | 'process' | 'pending' | 'sent' | 'error' | 'canceled';
    to_delete?: boolean;
    uuid?: string;
    write_date?: string;
    write_uid?: number | false;
}

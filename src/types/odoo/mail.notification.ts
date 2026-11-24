export interface TMailNotification {
    author_id?: number | false;
    display_name?: string;
    failure_reason?: string;
    failure_type?:
        | 'unknown'
        | 'mail_bounce'
        | 'mail_email_invalid'
        | 'mail_email_missing'
        | 'mail_from_invalid'
        | 'mail_from_missing'
        | 'mail_smtp'
        | 'sms_number_missing'
        | 'sms_number_format'
        | 'sms_credit'
        | 'sms_country_not_supported'
        | 'sms_registration_needed'
        | 'sms_server'
        | 'sms_acc'
        | 'sms_expired'
        | 'sms_invalid_destination'
        | 'sms_not_allowed'
        | 'sms_not_delivered'
        | 'sms_rejected'
        | 'sn_credit'
        | 'sn_trial'
        | 'sn_price'
        | 'sn_fields'
        | 'sn_format'
        | 'sn_error';
    id?: number;
    is_read?: boolean;
    letter_id?: number | false;
    mail_mail_id?: number | false;
    mail_message_id: number | false;
    notification_status?:
        'ready' | 'process' | 'pending' | 'sent' | 'bounce' | 'exception' | 'canceled';
    notification_type?: 'inbox' | 'email' | 'sms' | 'snail';
    read_date?: string;
    res_partner_id?: number | false;
    sms_id?: number | false;
    sms_id_int?: number;
    sms_number?: string;
    sms_tracker_ids?: number[];
}

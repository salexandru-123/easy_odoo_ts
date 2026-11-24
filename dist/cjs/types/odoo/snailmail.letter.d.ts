export interface TSnailmailLetter {
    attachment_datas?: string | false;
    attachment_fname?: string;
    attachment_id?: number | false;
    city?: string;
    color?: boolean;
    company_id?: number | false;
    country_id?: number | false;
    cover?: boolean;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    duplex?: boolean;
    error_code?:
        | 'MISSING_REQUIRED_FIELDS'
        | 'CREDIT_ERROR'
        | 'TRIAL_ERROR'
        | 'NO_PRICE_AVAILABLE'
        | 'FORMAT_ERROR'
        | 'UNKNOWN_ERROR'
        | 'ATTACHMENT_ERROR';
    id?: number;
    info_msg?: string;
    message_id?: number | false;
    model: string;
    notification_ids?: number[];
    partner_id: number | false;
    reference?: string;
    report_template?: number | false;
    res_id: number;
    state?: 'pending' | 'sent' | 'error' | 'canceled';
    state_id?: number | false;
    street?: string;
    street2?: string;
    user_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
    zip?: string;
}

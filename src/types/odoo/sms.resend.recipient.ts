export interface TSmsResendRecipient {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    failure_type?: string;
    id?: number;
    notification_id: number | false;
    partner_id?: number | false;
    partner_name?: string;
    resend?: boolean;
    sms_number?: string;
    sms_resend_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

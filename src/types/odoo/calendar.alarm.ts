export interface TCalendarAlarm {
    alarm_type: string;
    body?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    duration: number;
    duration_minutes?: number;
    id?: number;
    interval: string;
    mail_template_id?: number | false;
    name: string;
    sms_notify_responsible?: boolean;
    sms_template_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

export interface TBaseEnableProfilingWizard {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    duration?: 'minutes_5' | 'hours_1' | 'days_1' | 'months_1';
    expiration?: string;
    id?: number;
    write_date?: string;
    write_uid?: number | false;
}

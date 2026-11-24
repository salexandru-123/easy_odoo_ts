export interface TAccountPaymentTermLine {
    create_date?: string;
    create_uid?: number | false;
    days_next_month?: string;
    delay_type?:
        | 'days_after'
        | 'days_after_end_of_month'
        | 'days_after_end_of_next_month'
        | 'days_end_of_month_on_the';
    display_days_next_month?: boolean;
    display_name?: string;
    id?: number;
    nb_days?: number;
    payment_id: number | false;
    value?: 'percent' | 'fixed';
    value_amount?: number;
    write_date?: string;
    write_uid?: number | false;
}

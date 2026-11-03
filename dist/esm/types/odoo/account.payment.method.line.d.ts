export interface TAccountPaymentMethodLine {
    available_payment_method_ids?: number[];
    code?: string;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    default_account_id?: number | false;
    display_name?: string;
    id?: number;
    journal_id?: number | false;
    name?: string;
    payment_account_id?: number | false;
    payment_method_id: number | false;
    payment_provider_id?: number | false;
    payment_provider_state?: string;
    payment_type?: string;
    sequence?: number;
    write_date?: string;
    write_uid?: number | false;
}

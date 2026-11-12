export interface TPaymentLinkWizard {
    amount: number;
    amount_max?: number;
    amount_paid?: number;
    company_id?: number | false;
    confirmation_message?: string;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    discount_date?: string;
    display_name?: string;
    display_open_installments?: boolean;
    epd_info?: string;
    has_eligible_epd?: boolean;
    id?: number;
    invoice_amount_due?: number;
    link?: string;
    open_installments?: unknown;
    open_installments_preview?: string;
    partner_email?: string;
    partner_id?: number | false;
    res_id: number;
    res_model: string;
    warning_message?: string;
    write_date?: string;
    write_uid?: number | false;
}

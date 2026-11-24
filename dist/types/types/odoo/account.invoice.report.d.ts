export interface TAccountInvoiceReport {
    account_id?: number | false;
    commercial_partner_id?: number | false;
    company_currency_id?: number | false;
    company_id?: number | false;
    country_id?: number | false;
    currency_id?: number | false;
    display_name?: string;
    fiscal_position_id?: number | false;
    id?: number;
    inventory_value?: number;
    invoice_date?: string;
    invoice_date_due?: string;
    invoice_user_id?: number | false;
    journal_id?: number | false;
    move_id?: number | false;
    move_type?: 'out_invoice' | 'in_invoice' | 'out_refund' | 'in_refund';
    partner_id?: number | false;
    payment_state?:
        | 'not_paid'
        | 'in_payment'
        | 'paid'
        | 'partial'
        | 'reversed'
        | 'blocked'
        | 'invoicing_legacy';
    price_average?: number;
    price_margin?: number;
    price_subtotal?: number;
    price_subtotal_currency?: number;
    price_total?: number;
    product_categ_id?: number | false;
    product_id?: number | false;
    product_uom_id?: number | false;
    quantity?: number;
    state?: 'draft' | 'posted' | 'cancel';
    team_id?: number | false;
}

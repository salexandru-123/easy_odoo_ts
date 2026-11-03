export interface TPurchaseBillUnion {
    amount?: number;
    company_id?: number | false;
    currency_id?: number | false;
    date?: string;
    display_name?: string;
    id?: number;
    name?: string;
    partner_id?: number | false;
    purchase_order_id?: number | false;
    reference?: string;
    vendor_bill_id?: number | false;
}

export interface TAccountAnalyticApplicability {
    account_prefix?: string;
    account_prefix_placeholder?: string;
    analytic_plan_id?: number | false;
    applicability: 'optional' | 'mandatory' | 'unavailable';
    business_domain:
        'general' | 'invoice' | 'bill' | 'purchase_order' | 'manufacturing_order' | 'sale_order';
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_account_prefix?: boolean;
    display_name?: string;
    id?: number;
    product_categ_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

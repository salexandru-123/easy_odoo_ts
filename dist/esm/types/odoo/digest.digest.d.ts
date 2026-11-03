export interface TDigestDigest {
    available_fields?: string;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    display_name?: string;
    id?: number;
    is_subscribed?: boolean;
    kpi_account_bank_cash?: boolean;
    kpi_account_bank_cash_value?: number;
    kpi_account_total_revenue?: boolean;
    kpi_account_total_revenue_value?: number;
    kpi_all_sale_total?: boolean;
    kpi_all_sale_total_value?: number;
    kpi_mail_message_total?: boolean;
    kpi_mail_message_total_value?: number;
    kpi_res_users_connected?: boolean;
    kpi_res_users_connected_value?: number;
    name: string;
    next_run_date?: string;
    periodicity: string;
    state?: string;
    user_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

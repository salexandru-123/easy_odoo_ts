export interface TAccountAccount {
    account_type:
        | 'asset_receivable'
        | 'asset_cash'
        | 'asset_current'
        | 'asset_non_current'
        | 'asset_prepayments'
        | 'asset_fixed'
        | 'liability_payable'
        | 'liability_credit_card'
        | 'liability_current'
        | 'liability_non_current'
        | 'equity'
        | 'equity_unaffected'
        | 'income'
        | 'income_other'
        | 'expense'
        | 'expense_depreciation'
        | 'expense_direct_cost'
        | 'off_balance';
    allowed_journal_ids?: number[];
    code?: string;
    code_mapping_ids?: number[];
    code_store?: string;
    company_currency_id?: number | false;
    company_fiscal_country_code?: string;
    company_ids?: number[];
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    current_balance?: number;
    deprecated?: boolean;
    display_mapping_tab?: boolean;
    display_name?: string;
    group_id?: number | false;
    has_message?: boolean;
    id?: number;
    include_initial_balance?: boolean;
    internal_group?: 'equity' | 'asset' | 'liability' | 'income' | 'expense' | 'off';
    message_attachment_count?: number;
    message_follower_ids?: number[];
    message_has_error?: boolean;
    message_has_error_counter?: number;
    message_has_sms_error?: boolean;
    message_ids?: number[];
    message_is_follower?: boolean;
    message_needaction?: boolean;
    message_needaction_counter?: number;
    message_partner_ids?: number[];
    name: string;
    non_trade?: boolean;
    note?: string;
    opening_balance?: number;
    opening_credit?: number;
    opening_debit?: number;
    placeholder_code?: string;
    reconcile?: boolean;
    related_taxes_amount?: number;
    root_id?: number | false;
    tag_ids?: number[];
    tax_ids?: number[];
    used?: boolean;
    website_message_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

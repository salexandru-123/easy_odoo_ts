export interface TAccountReport {
    active?: boolean;
    availability_condition?: 'country' | 'coa' | 'always';
    chart_template?: '';
    column_ids?: number[];
    country_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    currency_translation?: 'current' | 'cta';
    default_opening_date_filter?:
        | 'this_year'
        | 'this_quarter'
        | 'this_month'
        | 'today'
        | 'previous_month'
        | 'previous_quarter'
        | 'previous_year'
        | 'this_tax_period'
        | 'previous_tax_period';
    display_name?: string;
    filter_account_type?: 'both' | 'payable' | 'receivable' | 'disabled';
    filter_aml_ir_filters?: boolean;
    filter_analytic?: boolean;
    filter_budgets?: boolean;
    filter_date_range?: boolean;
    filter_fiscal_position?: boolean;
    filter_growth_comparison?: boolean;
    filter_hide_0_lines?: 'by_default' | 'optional' | 'never';
    filter_hierarchy?: 'by_default' | 'optional' | 'never';
    filter_journals?: boolean;
    filter_multi_company?: 'disabled' | 'selector' | 'tax_units';
    filter_partner?: boolean;
    filter_period_comparison?: boolean;
    filter_show_draft?: boolean;
    filter_unfold_all?: boolean;
    filter_unreconciled?: boolean;
    id?: number;
    integer_rounding?: 'HALF-UP' | 'UP' | 'DOWN';
    line_ids?: number[];
    load_more_limit?: number;
    name: string;
    only_tax_exigible?: boolean;
    prefix_groups_threshold?: number;
    root_report_id?: number | false;
    search_bar?: boolean;
    section_main_report_ids?: number[];
    section_report_ids?: number[];
    sequence?: number;
    use_sections?: boolean;
    variant_report_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

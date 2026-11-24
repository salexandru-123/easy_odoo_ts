export interface TAccountReportExpression {
    auditable?: boolean;
    blank_if_zero?: boolean;
    carryover_target?: string;
    create_date?: string;
    create_uid?: number | false;
    date_scope?:
        | 'from_beginning'
        | 'from_fiscalyear'
        | 'to_beginning_of_fiscalyear'
        | 'to_beginning_of_period'
        | 'strict_range'
        | 'previous_tax_period';
    display_name?: string;
    engine: 'domain' | 'tax_tags' | 'aggregation' | 'account_codes' | 'external' | 'custom';
    figure_type?:
        | 'monetary'
        | 'percentage'
        | 'integer'
        | 'float'
        | 'date'
        | 'datetime'
        | 'boolean'
        | 'string';
    formula: string;
    green_on_positive?: boolean;
    id?: number;
    label: string;
    report_line_id: number | false;
    report_line_name?: string;
    subformula?: string;
    write_date?: string;
    write_uid?: number | false;
}

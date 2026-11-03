export interface TAccountReportExpression {
    auditable?: boolean;
    blank_if_zero?: boolean;
    carryover_target?: string;
    create_date?: string;
    create_uid?: number | false;
    date_scope: string;
    display_name?: string;
    engine: string;
    figure_type?: string;
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

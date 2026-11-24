export interface TReportPaperformat {
    create_date?: string;
    create_uid?: number | false;
    css_margins?: boolean;
    default?: boolean;
    disable_shrinking?: boolean;
    display_name?: string;
    dpi?: number;
    format?:
        | 'A0'
        | 'A1'
        | 'A2'
        | 'A3'
        | 'A4'
        | 'A5'
        | 'A6'
        | 'A7'
        | 'A8'
        | 'A9'
        | 'B0'
        | 'B1'
        | 'B2'
        | 'B3'
        | 'B4'
        | 'B5'
        | 'B6'
        | 'B7'
        | 'B8'
        | 'B9'
        | 'B10'
        | 'C5E'
        | 'Comm10E'
        | 'DLE'
        | 'Executive'
        | 'Folio'
        | 'Ledger'
        | 'Legal'
        | 'Letter'
        | 'Tabloid'
        | 'custom';
    header_line?: boolean;
    header_spacing?: number;
    id?: number;
    margin_bottom?: number;
    margin_left?: number;
    margin_right?: number;
    margin_top?: number;
    name: string;
    orientation?: 'Landscape' | 'Portrait';
    page_height?: number;
    page_width?: number;
    print_page_height?: number;
    print_page_width?: number;
    report_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

export interface TMrpProductionBackorder {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    mrp_production_backorder_line_ids?: number[];
    mrp_production_ids?: number[];
    show_backorder_lines?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

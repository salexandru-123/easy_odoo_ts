export interface TProcurementGroup {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    move_type?: string;
    mrp_production_ids?: number[];
    name: string;
    partner_id?: number | false;
    purchase_line_ids?: number[];
    sale_id?: number | false;
    stock_move_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

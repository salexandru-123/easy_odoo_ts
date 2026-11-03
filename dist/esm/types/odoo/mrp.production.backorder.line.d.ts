export interface TMrpProductionBackorderLine {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    mrp_production_backorder_id: number | false;
    mrp_production_id: number | false;
    to_backorder?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

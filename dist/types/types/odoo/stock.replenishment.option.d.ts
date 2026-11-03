export interface TStockReplenishmentOption {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    free_qty?: number;
    id?: number;
    lead_time?: string;
    location_id?: number | false;
    product_id?: number | false;
    qty_to_order?: number;
    replenishment_info_id?: number | false;
    route_id?: number | false;
    uom?: string;
    warehouse_id?: number | false;
    warning_message?: string;
    write_date?: string;
    write_uid?: number | false;
}

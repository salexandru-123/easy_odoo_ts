export interface TMrpProductionSplit {
    counter?: number;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    product_id?: number | false;
    product_qty?: number;
    product_uom_id?: number | false;
    production_capacity?: number;
    production_detailed_vals_ids?: number[];
    production_id?: number | false;
    production_split_multi_id?: number | false;
    valid_details?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

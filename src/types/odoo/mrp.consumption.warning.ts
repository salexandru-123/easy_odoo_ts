export interface TMrpConsumptionWarning {
    consumption?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    mrp_consumption_warning_line_ids?: number[];
    mrp_production_count?: number;
    mrp_production_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

export interface TStockQuantRelocate {
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    dest_location_id?: number | false;
    dest_package_id?: number | false;
    dest_package_id_domain?: string;
    display_name?: string;
    id?: number;
    is_multi_location?: boolean;
    is_partial_package?: boolean;
    message?: string;
    partial_package_names?: string;
    quant_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

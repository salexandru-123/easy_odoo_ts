export interface TBarcodeRule {
    alias: string;
    associated_uom_id?: number | false;
    barcode_nomenclature_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    encoding: string;
    gs1_content_type?: string;
    gs1_decimal_usage?: boolean;
    id?: number;
    is_gs1_nomenclature?: boolean;
    name: string;
    pattern: string;
    sequence?: number;
    type: string;
    write_date?: string;
    write_uid?: number | false;
}

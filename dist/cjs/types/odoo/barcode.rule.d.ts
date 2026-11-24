export interface TBarcodeRule {
    alias?: string;
    associated_uom_id?: number | false;
    barcode_nomenclature_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    encoding?: 'any' | 'ean13' | 'ean8' | 'upca' | 'gs1-128';
    gs1_content_type?: 'date' | 'measure' | 'identifier' | 'alpha';
    gs1_decimal_usage?: boolean;
    id?: number;
    is_gs1_nomenclature?: boolean;
    name: string;
    pattern?: string;
    sequence?: number;
    type?:
        | 'alias'
        | 'product'
        | 'quantity'
        | 'weight'
        | 'location'
        | 'location_dest'
        | 'lot'
        | 'package'
        | 'use_date'
        | 'expiration_date'
        | 'package_type'
        | 'pack_date';
    write_date?: string;
    write_uid?: number | false;
}

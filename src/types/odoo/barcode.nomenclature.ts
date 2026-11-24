export interface TBarcodeNomenclature {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    gs1_separator_fnc1?: string;
    id?: number;
    is_gs1_nomenclature?: boolean;
    name: string;
    rule_ids?: number[];
    upc_ean_conv?: 'none' | 'ean2upc' | 'upc2ean' | 'always';
    write_date?: string;
    write_uid?: number | false;
}

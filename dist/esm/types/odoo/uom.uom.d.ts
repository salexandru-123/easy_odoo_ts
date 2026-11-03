export interface TUomUom {
    active?: boolean;
    category_id: number | false;
    color?: number;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    factor: number;
    factor_inv: number;
    fiscal_country_codes?: string;
    id?: number;
    name: string;
    ratio?: number;
    rounding: number;
    uom_type: string;
    write_date?: string;
    write_uid?: number | false;
}

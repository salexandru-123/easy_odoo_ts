export interface TStockChangeProductQty {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    new_quantity: number;
    product_id: number | false;
    product_tmpl_id: number | false;
    product_uom_id?: number | false;
    product_variant_count?: number;
    write_date?: string;
    write_uid?: number | false;
}

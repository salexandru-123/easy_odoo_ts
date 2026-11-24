export interface TProductLabelLayout {
    columns?: number;
    create_date?: string;
    create_uid?: number | false;
    custom_quantity?: number;
    display_name?: string;
    extra_html?: string;
    id?: number;
    move_ids?: number[];
    move_quantity?: 'move' | 'custom';
    pricelist_id?: number | false;
    print_format?: 'dymo' | '2x7xprice' | '4x7xprice' | '4x12' | '4x12xprice' | 'zpl' | 'zplxprice';
    product_ids?: number[];
    product_tmpl_ids?: number[];
    rows?: number;
    write_date?: string;
    write_uid?: number | false;
}

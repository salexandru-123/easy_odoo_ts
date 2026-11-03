export interface TProductTemplateAttributeValue {
    attribute_id?: number | false;
    attribute_line_id: number | false;
    color?: number;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    display_name?: string;
    display_type?: string;
    exclude_for?: number[];
    html_color?: string;
    id?: number;
    image?: string | false;
    is_custom?: boolean;
    name?: string;
    price_extra?: number;
    product_attribute_value_id: number | false;
    product_tmpl_id?: number | false;
    ptav_active?: boolean;
    ptav_product_variant_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

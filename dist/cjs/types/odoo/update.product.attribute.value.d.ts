export interface TUpdateProductAttributeValue {
    attribute_value_id: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    message?: string;
    mode?: 'add' | 'update_extra_price';
    product_count?: number;
    write_date?: string;
    write_uid?: number | false;
}

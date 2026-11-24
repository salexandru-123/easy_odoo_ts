export interface TDeliveryPriceRule {
    carrier_id: number | false;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    display_name?: string;
    id?: number;
    list_base_price?: number;
    list_price?: number;
    max_value: number;
    name?: string;
    operator?: '==' | '<=' | '<' | '>=' | '>';
    sequence?: number;
    variable?: 'weight' | 'volume' | 'wv' | 'price' | 'quantity';
    variable_factor?: 'weight' | 'volume' | 'wv' | 'price' | 'quantity';
    write_date?: string;
    write_uid?: number | false;
}

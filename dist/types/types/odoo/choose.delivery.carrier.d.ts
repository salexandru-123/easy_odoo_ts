export interface TChooseDeliveryCarrier {
    available_carrier_ids?: number[];
    carrier_id: number | false;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    delivery_message?: string;
    delivery_price?: number;
    delivery_type?: string;
    display_name?: string;
    display_price?: number;
    id?: number;
    invoicing_message?: string;
    order_id: number | false;
    partner_id: number | false;
    total_weight?: number;
    weight_uom_name?: string;
    write_date?: string;
    write_uid?: number | false;
}

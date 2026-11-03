export interface TStockDeliveryNoteType {
    active?: boolean;
    code: string;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    default_goods_appearance_id?: number | false;
    default_transport_condition_id?: number | false;
    default_transport_method_id?: number | false;
    default_transport_reason_id?: number | false;
    display_name?: string;
    id?: number;
    name: string;
    next_sequence_number?: number;
    note?: string;
    print_prices?: boolean;
    sequence?: number;
    sequence_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

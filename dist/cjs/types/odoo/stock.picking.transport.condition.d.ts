export interface TStockPickingTransportCondition {
    active?: boolean;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    name: string;
    note?: string;
    price_to_show?: 'unit' | 'total' | 'none';
    sequence?: number;
    write_date?: string;
    write_uid?: number | false;
}

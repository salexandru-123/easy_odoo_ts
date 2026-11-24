export interface TAccountCashRounding {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    loss_account_id?: number | false;
    name: string;
    profit_account_id?: number | false;
    rounding?: number;
    rounding_method?: 'UP' | 'DOWN' | 'HALF-UP';
    strategy?: 'biggest_tax' | 'add_invoice_line';
    write_date?: string;
    write_uid?: number | false;
}

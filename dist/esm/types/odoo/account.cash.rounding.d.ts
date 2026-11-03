export interface TAccountCashRounding {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    loss_account_id?: number | false;
    name: string;
    profit_account_id?: number | false;
    rounding: number;
    rounding_method: string;
    strategy: string;
    write_date?: string;
    write_uid?: number | false;
}

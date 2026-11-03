export interface TValidateAccountMove {
    abnormal_amount_partner_ids?: number[];
    abnormal_date_partner_ids?: number[];
    create_date?: string;
    create_uid?: number | false;
    display_force_post?: boolean;
    display_name?: string;
    force_post?: boolean;
    id?: number;
    ignore_abnormal_amount?: boolean;
    ignore_abnormal_date?: boolean;
    is_entries?: boolean;
    move_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

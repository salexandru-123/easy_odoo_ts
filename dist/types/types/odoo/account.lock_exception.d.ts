export interface TAccountLock_exception {
    active?: boolean;
    company_id?: number | false;
    company_lock_date?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    end_datetime?: string;
    fiscalyear_lock_date?: string;
    id?: number;
    lock_date?: string;
    lock_date_field:
        'fiscalyear_lock_date' | 'tax_lock_date' | 'sale_lock_date' | 'purchase_lock_date';
    purchase_lock_date?: string;
    reason?: string;
    sale_lock_date?: string;
    state?: 'active' | 'revoked' | 'expired';
    tax_lock_date?: string;
    user_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

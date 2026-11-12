export interface TAccountBatchPaymentRejection {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    in_reconcile_payment_ids?: number[];
    nb_batch_payment_ids?: number;
    nb_rejected_payment_ids?: number;
    rejected_payment_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

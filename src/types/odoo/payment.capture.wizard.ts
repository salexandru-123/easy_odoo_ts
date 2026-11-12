export interface TPaymentCaptureWizard {
    amount_to_capture?: number;
    authorized_amount?: number;
    available_amount?: number;
    captured_amount?: number;
    create_date?: string;
    create_uid?: number | false;
    currency_id?: number | false;
    display_name?: string;
    has_draft_children?: boolean;
    has_remaining_amount?: boolean;
    id?: number;
    is_amount_to_capture_valid?: boolean;
    support_partial_capture?: boolean;
    transaction_ids?: number[];
    void_remaining_amount?: boolean;
    voided_amount?: number;
    write_date?: string;
    write_uid?: number | false;
}

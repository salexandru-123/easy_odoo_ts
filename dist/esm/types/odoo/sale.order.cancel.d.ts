export interface TSaleOrderCancel {
    author_id?: number | false;
    body?: string;
    body_has_template_value?: boolean;
    can_edit_body?: boolean;
    create_date?: string;
    create_uid?: number | false;
    display_delivery_alert?: boolean;
    display_invoice_alert?: boolean;
    display_name?: string;
    display_purchase_orders_alert?: boolean;
    id?: number;
    is_mail_template_editor?: boolean;
    lang?: string;
    order_id: number | false;
    recipient_ids?: number[];
    render_model?: string;
    subject?: string;
    template_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

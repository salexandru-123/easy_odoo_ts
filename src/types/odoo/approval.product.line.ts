export interface TApprovalProductLine {
    approval_request_id: number | false;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    description: string;
    display_name?: string;
    has_no_seller?: boolean;
    id?: number;
    po_uom_qty?: number;
    product_id?: number | false;
    product_template_id?: number | false;
    product_uom_category_id?: number | false;
    product_uom_id?: number | false;
    purchase_order_line_id?: number | false;
    quantity?: number;
    seller_id?: number | false;
    warehouse_id?: number | false;
    write_date?: string;
    write_uid?: number | false;
}

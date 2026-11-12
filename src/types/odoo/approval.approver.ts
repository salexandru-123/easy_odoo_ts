export interface TApprovalApprover {
    can_edit?: boolean;
    can_edit_user_id?: boolean;
    category_approver?: boolean;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    existing_request_user_ids?: number[];
    id?: number;
    request_id?: number | false;
    required?: boolean;
    sequence?: number;
    status?: string;
    user_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

export interface THrContractSignDocumentWizard {
    attachment_ids?: number[];
    cc_partner_ids?: number[];
    contract_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    employee_ids?: number[];
    employee_role_id: number | false;
    has_both_template?: boolean;
    id?: number;
    mail_displayed?: string;
    mail_to?: string;
    message?: string;
    possible_template_ids?: number[];
    responsible_id?: number | false;
    sign_template_ids: number[];
    sign_template_responsible_ids?: number[];
    subject: string;
    template_warning?: string;
    write_date?: string;
    write_uid?: number | false;
}

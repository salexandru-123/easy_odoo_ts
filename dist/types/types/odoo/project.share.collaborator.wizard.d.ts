export interface TProjectShareCollaboratorWizard {
    access_mode: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    parent_wizard_id?: number | false;
    partner_id: number | false;
    send_invitation?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

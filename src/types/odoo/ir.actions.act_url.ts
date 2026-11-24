export interface TIrActionsAct_url {
    binding_model_id?: number | false;
    binding_type?: 'action' | 'report';
    binding_view_types?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    help?: string;
    id?: number;
    name: string;
    path?: string;
    target?: 'new' | 'self' | 'download';
    type?: string;
    url: string;
    write_date?: string;
    write_uid?: number | false;
    xml_id?: string;
}

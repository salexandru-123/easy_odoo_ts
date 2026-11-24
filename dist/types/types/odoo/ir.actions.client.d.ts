export interface TIrActionsClient {
    binding_model_id?: number | false;
    binding_type?: 'action' | 'report';
    binding_view_types?: string;
    context?: string;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    help?: string;
    id?: number;
    name: string;
    params?: string | false;
    params_store?: string | false;
    path?: string;
    res_model?: string;
    tag: string;
    target?: 'current' | 'new' | 'fullscreen' | 'main';
    type?: string;
    write_date?: string;
    write_uid?: number | false;
    xml_id?: string;
}

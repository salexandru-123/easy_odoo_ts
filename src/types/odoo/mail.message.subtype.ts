export interface TMailMessageSubtype {
    create_date?: string;
    create_uid?: number | false;
    default?: boolean;
    description?: string;
    display_name?: string;
    hidden?: boolean;
    id?: number;
    internal?: boolean;
    name: string;
    parent_id?: number | false;
    relation_field?: string;
    res_model?: string;
    sequence?: number;
    track_recipients?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

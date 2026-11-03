export interface TIrUiView {
    active?: boolean;
    arch?: string;
    arch_base?: string;
    arch_db?: string;
    arch_fs?: string;
    arch_prev?: string;
    arch_updated?: boolean;
    create_date?: string;
    create_uid?: number | false;
    customize_show?: boolean;
    display_name?: string;
    groups_id?: number[];
    id?: number;
    inherit_children_ids?: number[];
    inherit_id?: number | false;
    key?: string;
    mode: string;
    model?: string;
    model_data_id?: number | false;
    model_id?: number | false;
    name: string;
    priority: number;
    type?: string;
    warning_info?: string;
    write_date?: string;
    write_uid?: number | false;
    xml_id?: string;
}

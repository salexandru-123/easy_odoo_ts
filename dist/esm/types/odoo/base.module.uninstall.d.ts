export interface TBaseModuleUninstall {
    create_date?: string;
    create_uid?: number | false;
    custom_fields?: number;
    custom_models?: number;
    custom_reports?: number;
    custom_views?: number;
    display_name?: string;
    id?: number;
    is_studio?: boolean;
    model_ids?: number[];
    module_id: number | false;
    module_ids?: number[];
    show_all?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

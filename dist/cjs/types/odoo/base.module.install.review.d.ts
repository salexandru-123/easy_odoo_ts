export interface TBaseModuleInstallReview {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    module_id: number | false;
    module_ids?: number[];
    modules_description?: string;
    write_date?: string;
    write_uid?: number | false;
}

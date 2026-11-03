export interface TStudioExportModel {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    domain?: string;
    excluded_fields?: number[];
    id?: number;
    include_attachment?: boolean;
    is_demo_data?: boolean;
    model_id: number | false;
    model_name?: string;
    records_count?: string;
    sequence?: number;
    updatable?: boolean;
    write_date?: string;
    write_uid?: number | false;
}

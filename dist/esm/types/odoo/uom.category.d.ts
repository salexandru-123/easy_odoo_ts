export interface TUomCategory {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    name: string;
    reference_uom_id?: number | false;
    uom_ids?: number[];
    write_date?: string;
    write_uid?: number | false;
}

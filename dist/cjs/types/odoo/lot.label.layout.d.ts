export interface TLotLabelLayout {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    label_quantity?: 'lots' | 'units';
    move_line_ids?: number[];
    print_format?: '4x12' | 'zpl';
    write_date?: string;
    write_uid?: number | false;
}

export interface TResLang {
    active?: boolean;
    code: string;
    create_date?: string;
    create_uid?: number | false;
    date_format?: string;
    decimal_point?: string;
    direction?: 'ltr' | 'rtl';
    display_name?: string;
    flag_image?: string | false;
    flag_image_url?: string;
    grouping?: string;
    id?: number;
    iso_code?: string;
    name: string;
    short_time_format?: string;
    thousands_sep?: string;
    time_format?: string;
    url_code: string;
    week_start?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    write_date?: string;
    write_uid?: number | false;
}

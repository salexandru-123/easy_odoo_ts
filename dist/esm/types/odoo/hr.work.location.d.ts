export interface THrWorkLocation {
    active?: boolean;
    address_id: number | false;
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    location_number?: string;
    location_type?: 'home' | 'office' | 'other';
    name: string;
    write_date?: string;
    write_uid?: number | false;
}

export interface TPrivacyLog {
    additional_note?: string;
    anonymized_email: string;
    anonymized_name: string;
    create_date?: string;
    create_uid?: number | false;
    date: string;
    display_name?: string;
    execution_details?: string;
    id?: number;
    records_description?: string;
    user_id: number | false;
    write_date?: string;
    write_uid?: number | false;
}

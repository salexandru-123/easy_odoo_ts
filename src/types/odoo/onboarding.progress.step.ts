export interface TOnboardingProgressStep {
    company_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    progress_ids?: number[];
    step_id: number | false;
    step_state?: string;
    write_date?: string;
    write_uid?: number | false;
}

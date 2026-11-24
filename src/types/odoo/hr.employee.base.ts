export interface THrEmployeeBase {
    active?: boolean;
    address_id?: number | false;
    child_all_count?: number;
    child_count?: number;
    coach_id?: number | false;
    color?: number;
    company_id?: number | false;
    department_color?: number;
    department_id?: number | false;
    email?: string;
    hr_icon_display?:
        | 'presence_present'
        | 'presence_out_of_working_hour'
        | 'presence_absent'
        | 'presence_archive'
        | 'presence_undetermined';
    hr_presence_state?: 'present' | 'absent' | 'archive' | 'out_of_working_hour';
    im_status?: string;
    is_flexible?: boolean;
    is_fully_flexible?: boolean;
    job_id?: number | false;
    job_title?: string;
    last_activity?: string;
    last_activity_time?: string;
    member_of_department?: boolean;
    mobile_phone?: string;
    name?: string;
    newly_hired?: boolean;
    parent_id?: number | false;
    phone?: string;
    resource_calendar_id?: number | false;
    resource_id?: number | false;
    share?: boolean;
    show_hr_icon_display?: boolean;
    tz?: '';
    user_id?: number | false;
    work_contact_id?: number | false;
    work_email?: string;
    work_location_id?: number | false;
    work_location_name?: string;
    work_location_type?: 'home' | 'office' | 'other';
    work_phone?: string;
}

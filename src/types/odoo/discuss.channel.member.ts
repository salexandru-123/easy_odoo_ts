export interface TDiscussChannelMember {
    channel_id: number | false;
    create_date?: string;
    create_uid?: number | false;
    custom_channel_name?: string;
    custom_notifications?: string;
    display_name?: string;
    fetched_message_id?: number | false;
    fold_state?: string;
    guest_id?: number | false;
    id?: number;
    is_pinned?: boolean;
    is_self?: boolean;
    last_interest_dt?: string;
    last_seen_dt?: string;
    message_unread_counter?: number;
    mute_until_dt?: string;
    new_message_separator: number;
    partner_id?: number | false;
    rtc_inviting_session_id?: number | false;
    rtc_session_ids?: number[];
    seen_message_id?: number | false;
    unpin_dt?: string;
    write_date?: string;
    write_uid?: number | false;
}

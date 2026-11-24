export interface TBusPresence {
    display_name?: string;
    guest_id?: number | false;
    id?: number;
    last_poll?: string;
    last_presence?: string;
    status?: 'online' | 'away' | 'offline';
    user_id?: number | false;
}

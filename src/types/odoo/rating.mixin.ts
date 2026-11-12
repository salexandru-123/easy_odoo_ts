export interface TRatingMixin {
    has_message?: boolean;
    message_attachment_count?: number;
    message_follower_ids?: number[];
    message_has_error?: boolean;
    message_has_error_counter?: number;
    message_has_sms_error?: boolean;
    message_ids?: number[];
    message_is_follower?: boolean;
    message_needaction?: boolean;
    message_needaction_counter?: number;
    message_partner_ids?: number[];
    rating_avg?: number;
    rating_avg_text?: string;
    rating_count?: number;
    rating_ids?: number[];
    rating_last_feedback?: string;
    rating_last_image?: string | false;
    rating_last_text?: string;
    rating_last_value?: number;
    rating_percentage_satisfaction?: number;
    website_message_ids?: number[];
}

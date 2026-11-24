export interface TIrActionsAct_windowView {
    act_window_id?: number | false;
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    id?: number;
    multi?: boolean;
    sequence?: number;
    view_id?: number | false;
    view_mode:
        | 'list'
        | 'form'
        | 'graph'
        | 'pivot'
        | 'calendar'
        | 'kanban'
        | 'cohort'
        | 'gantt'
        | 'grid'
        | 'hierarchy'
        | 'map'
        | 'activity';
    write_date?: string;
    write_uid?: number | false;
}

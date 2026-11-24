export interface TIrModuleModuleExclusion {
    create_date?: string;
    create_uid?: number | false;
    display_name?: string;
    exclusion_id?: number | false;
    id?: number;
    module_id?: number | false;
    name?: string;
    state?:
        | 'uninstallable'
        | 'uninstalled'
        | 'installed'
        | 'to upgrade'
        | 'to remove'
        | 'to install'
        | 'unknown';
    write_date?: string;
    write_uid?: number | false;
}

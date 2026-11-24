export interface TIrModuleModule {
    account_templates?: string | false;
    application?: boolean;
    author?: string;
    auto_install?: boolean;
    category_id?: number | false;
    contributors?: string;
    country_ids?: number[];
    create_date?: string;
    create_uid?: number | false;
    demo?: boolean;
    dependencies_id?: number[];
    description?: string;
    description_html?: string;
    display_name?: string;
    exclusion_ids?: number[];
    has_iap?: boolean;
    icon?: string;
    icon_flag?: string;
    icon_image?: string | false;
    id?: number;
    imported?: boolean;
    installed_version?: string;
    latest_version?: string;
    license?:
        | 'GPL-2'
        | 'GPL-2 or any later version'
        | 'GPL-3'
        | 'GPL-3 or any later version'
        | 'AGPL-3'
        | 'LGPL-3'
        | 'Other OSI approved licence'
        | 'OEEL-1'
        | 'OPL-1'
        | 'Other proprietary';
    maintainer?: string;
    menus_by_module?: string;
    module_type?: 'official' | 'industries';
    name: string;
    published_version?: string;
    reports_by_module?: string;
    sequence?: number;
    shortdesc?: string;
    state?:
        'uninstallable' | 'uninstalled' | 'installed' | 'to upgrade' | 'to remove' | 'to install';
    summary?: string;
    to_buy?: boolean;
    url?: string;
    views_by_module?: string;
    website?: string;
    write_date?: string;
    write_uid?: number | false;
}

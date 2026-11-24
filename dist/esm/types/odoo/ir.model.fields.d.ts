export interface TIrModelFields {
    column1?: string;
    column2?: string;
    company_dependent?: boolean;
    complete_name?: string;
    compute?: string;
    copied?: boolean;
    create_date?: string;
    create_uid?: number | false;
    currency_field?: string;
    depends?: string;
    display_name?: string;
    domain?: string;
    field_description?: string;
    group_expand?: boolean;
    groups?: number[];
    help?: string;
    id?: number;
    index?: boolean;
    model: string;
    model_id: number | false;
    modules?: string;
    name?: string;
    on_delete?: 'cascade' | 'set null' | 'restrict';
    readonly?: boolean;
    related?: string;
    related_field_id?: number | false;
    relation?: string;
    relation_field?: string;
    relation_field_id?: number | false;
    relation_table?: string;
    required?: boolean;
    sanitize?: boolean;
    sanitize_attributes?: boolean;
    sanitize_form?: boolean;
    sanitize_overridable?: boolean;
    sanitize_style?: boolean;
    sanitize_tags?: boolean;
    selectable?: boolean;
    selection?: string;
    selection_ids?: number[];
    size?: number;
    state?: 'manual' | 'base';
    store?: boolean;
    strip_classes?: boolean;
    strip_style?: boolean;
    tracking?: number;
    translate?: boolean;
    ttype:
        | 'binary'
        | 'boolean'
        | 'char'
        | 'date'
        | 'datetime'
        | 'float'
        | 'html'
        | 'integer'
        | 'json'
        | 'many2many'
        | 'many2one'
        | 'many2one_reference'
        | 'monetary'
        | 'one2many'
        | 'properties'
        | 'properties_definition'
        | 'reference'
        | 'selection'
        | 'text';
    write_date?: string;
    write_uid?: number | false;
}

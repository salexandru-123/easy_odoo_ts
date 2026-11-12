import { OdooClient } from 'odoo-xmlrpc-ts';
import * as Models from '../models';
type Operator =
    | '='
    | '!='
    | 'like'
    | 'not like'
    | '>'
    | '>='
    | '<'
    | '<='
    | '=?'
    | '=like'
    | 'ilike'
    | '=ilike'
    | 'not ilike'
    | 'in'
    | 'not in'
    | 'child_of'
    | 'parent_of'
    | 'any'
    | 'not any';
export type OdooType<T extends OdooFieldType> = OdooFieldTypeMap[T];
type OdooFieldTypeMap = {
    char: string;
    text: string;
    html: string;
    selection: string;
    boolean: boolean;
    integer: number;
    float: number;
    monetary: number;
    date: string;
    datetime: string;
    many2one: number | false;
    one2many: number[];
    many2many: number[];
    binary: string | false;
    properties: Record<string, unknown> | false;
};
type OdooFieldType = keyof OdooFieldTypeMap;
type Field = string;
export type OdooDomain = [Field, Operator, any][] | [];
export type OdooOptions = {
    limit?: number;
    fields?: string[];
    order?: string;
    offset?: number;
    [propname: string]: any;
};
export type OdooValues = Record<string, unknown> | Record<string, unknown>[];
type UncapitalizeFirst<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${Lowercase<First>}${Rest}`
    : S;
type RemoveModelSuffix<S extends string> = S extends `${infer Name}Model`
    ? UncapitalizeFirst<Name>
    : UncapitalizeFirst<S>;
export type ModelConstructor = new (client: OdooClient) => Models.BaseOdooModel<object>;
export type ModelRegistry = typeof Models;
export type ModelInstances = {
    [K in keyof ModelRegistry as RemoveModelSuffix<K & string>]: InstanceType<ModelRegistry[K]>;
};
export {};

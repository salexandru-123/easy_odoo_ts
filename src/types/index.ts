export type * from './product';
export type * from './stock';
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

type Field<T extends string = string> = (T | `${T}.${T}`) & { readonly __brand: 'Field' };

export type OdooDomain = [Field, Operator, any];

export type OdooOptions = {
  limit?: number;
  fields?: string[];
  order?: string;
  offset?: number;
  [propname: string]: any;
};

export type OdooValues = Record<string, unknown> | Record<string, unknown>[];

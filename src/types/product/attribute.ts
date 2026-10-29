import { OdooType } from '..';

export type ProductAttributeFields = RequiredProductAttributeFields &
  UnrequiredProductAttributeFields;

type RequiredProductAttributeFields = {
  create_variant: OdooType<'selection'>;
  display_type: OdooType<'selection'>;
  name: OdooType<'char'>;
};

type UnrequiredProductAttributeFields = Partial<{
  active: OdooType<'boolean'>;
  attribute_line_ids: OdooType<'one2many'>;
  create_date: OdooType<'datetime'>;
  create_uid: OdooType<'many2one'>;
  display_name: OdooType<'char'>;
  id: OdooType<'integer'>;
  number_related_products: OdooType<'integer'>;
  product_tmpl_ids: OdooType<'many2many'>;
  sequence: OdooType<'integer'>;
  template_value_ids: OdooType<'one2many'>;
  value_ids: OdooType<'one2many'>;
  write_date: OdooType<'datetime'>;
  write_uid: OdooType<'many2one'>;
}>;

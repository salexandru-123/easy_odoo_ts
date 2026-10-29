import type {
  ProductProductFields,
  ProductTemplateFields,
  StockLotFields,
  StockQuantFields,
} from '../types';
import { ProductAttributeFields } from '../types/product/attribute';

import { BaseModel } from './odoo';

export class ProductProduct extends BaseModel<ProductProductFields> {
  protected readonly model = 'product.product';
}

export class ProductTemplate extends BaseModel<ProductTemplateFields> {
  protected readonly model = 'product.template';
}

export class StockQuant extends BaseModel<StockQuantFields> {
  protected readonly model = 'stock.quant';
}
export class StockLot extends BaseModel<StockLotFields> {
  protected readonly model = 'stock.lot';
}
export class ProductAttribute extends BaseModel<ProductAttributeFields> {
  protected readonly model = 'product.attribute';
}
// export class ResPartner extends BaseModel {
//   protected readonly model = 'res.partner';
// }
// export class UomUom extends BaseModel {
//   protected readonly model = 'uom.uom';
// }
// export class MrpBom extends BaseModel {
//   protected readonly model = 'mrp.bom';
// }

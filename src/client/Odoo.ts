import { OdooClient, OdooConfig } from 'odoo-xmlrpc-ts';
import { ProductProduct, ProductTemplate, StockLot, StockQuant } from '../models';

export default class Odoo {
  private readonly client: OdooClient;
  readonly productTemplate: ProductTemplate;
  readonly productProduct: ProductProduct;
  readonly stockQuant: StockQuant;
  readonly stockLot: StockLot;
  /**
   *
   */
  constructor(config: OdooConfig) {
    this.client = new OdooClient(config);
    this.productProduct = new ProductProduct(this.client);
    this.productTemplate = new ProductTemplate(this.client);
    this.stockQuant = new StockQuant(this.client);
    this.stockLot = new StockLot(this.client);
  }
  static async connect(config: OdooConfig): Promise<Odoo> {
    const odoo = new Odoo(config);
    await odoo.client.authenticate();
    return odoo;
  }
}

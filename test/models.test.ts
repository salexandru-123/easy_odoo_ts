import { OdooClient } from 'odoo-xmlrpc-ts';
import { ProductProductModel } from '../src/models/';
import Odoo from '../src/client/Odoo';

describe('ProductProduct', () => {
  let odoo: Odoo;
  let model: ProductProductModel;
  let authenticate: jest.SpyInstance;

  beforeEach(async () => {
    authenticate = jest.spyOn(OdooClient.prototype, 'authenticate').mockResolvedValue(1);
    odoo = await Odoo.connect({
      url: 'https://odoo.example.test',
      db: 'test',
      username: 'test',
      password: 'test',
    });
    model = odoo.productProduct;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('authenticates when connecting to Odoo', () => {
    expect(authenticate).toHaveBeenCalledTimes(1);
  });

  it('delegates create to the configured Odoo model', async () => {
    const create = jest.spyOn(OdooClient.prototype, 'create').mockResolvedValue(42);

    await expect(model.create({ name: 'Widget' })).resolves.toBe(42);
    expect(create).toHaveBeenCalledWith('product.product', { name: 'Widget' });
  });

  it('delegates read, write, and unlink to the configured Odoo model', async () => {
    const read = jest.spyOn(OdooClient.prototype, 'read').mockResolvedValue([{ id: 42 }]);
    const write = jest.spyOn(OdooClient.prototype, 'write').mockResolvedValue(true);
    const unlink = jest.spyOn(OdooClient.prototype, 'unlink').mockResolvedValue(true);

    await expect(model.read([42])).resolves.toEqual([{ id: 42 }]);
    await expect(model.write([42], { name: 'Updated widget' })).resolves.toBe(true);
    await expect(model.unlink([42])).resolves.toBe(true);

    expect(read).toHaveBeenCalledWith('product.product', [42]);
    expect(write).toHaveBeenCalledWith('product.product', [42], {
      name: 'Updated widget',
    });
    expect(unlink).toHaveBeenCalledWith('product.product', [42]);
  });

  it('defaults searches to an empty domain and passes search options through', async () => {
    const searchRead = jest.spyOn(OdooClient.prototype, 'searchRead').mockResolvedValue([]);
    const searchCount = jest.spyOn(OdooClient.prototype, 'searchCount').mockResolvedValue(3);
    const search = jest.spyOn(OdooClient.prototype, 'search').mockResolvedValue([42]);
    const options = { limit: 5, fields: ['name'] };

    await expect(model.searchRead()).resolves.toEqual([]);
    await expect(model.searchCount()).resolves.toBe(3);
    await expect(model.search(undefined, options)).resolves.toEqual([42]);

    expect(searchRead).toHaveBeenCalledWith('product.product', [], undefined);
    expect(searchCount).toHaveBeenCalledWith('product.product', []);
    expect(search).toHaveBeenCalledWith('product.product', [], options);
  });
});

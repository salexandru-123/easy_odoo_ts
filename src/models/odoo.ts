import { OdooClient } from 'odoo-xmlrpc-ts';
import { OdooDomain, OdooOptions, OdooValues } from '../types/base';

export abstract class BaseOdooModel<T extends object> {
  protected abstract readonly model: string;

  /**
   *
   */
  constructor(protected readonly client: OdooClient) {}
  async create(values: OdooValues): Promise<number> {
    return this.client.create(this.model, values);
  }
  async read(ids: number[]): Promise<T[]> {
    return this.client.read<T>(this.model, ids);
  }
  async write(ids: number[], values: OdooValues): Promise<boolean> {
    return this.client.write(this.model, ids, values);
  }
  async unlink(ids: number[]): Promise<boolean> {
    return await this.client.unlink(this.model, ids);
  }

  async searchRead(domain?: OdooDomain, opts?: OdooOptions): Promise<T[]> {
    return this.client.searchRead<T>(this.model, domain || [], opts);
  }

  async searchCount(domain?: OdooDomain): Promise<number> {
    return this.client.searchCount(this.model, domain || []);
  }

  async search(domain?: OdooDomain, opts?: OdooOptions): Promise<number[]> {
    return this.client.search(this.model, domain || [], opts);
  }

  async execute(method: string, domain?: OdooDomain, opts?: OdooOptions): Promise<unknown> {
    return this.client.execute(this.model, method, domain, opts);
  }
}

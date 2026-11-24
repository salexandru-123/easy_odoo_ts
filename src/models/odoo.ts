import { OdooClient } from 'odoo-xmlrpc-ts';
import { OdooDomain, OdooOptions } from '../types/base';

export abstract class BaseOdooModel<T extends object> {
    protected abstract readonly model: string;

    /**
     *
     */
    constructor(protected readonly client: OdooClient) {}

    async create<K extends T>(values: K): Promise<number> {
        return this.client.create<K>(this.model, values);
    }
    async createMulti<K extends T>(values: K[]): Promise<number[]> {
        return this.client.execute(this.model, 'create', values);
    }
    async read<K extends T>(ids: number[]): Promise<K[]> {
        return this.client.read<K>(this.model, ids);
    }
    async write(ids: number[], values: Partial<T>): Promise<boolean> {
        return this.client.write(this.model, ids, values as object);
    }
    async unlink(ids: number[]): Promise<boolean> {
        return await this.client.unlink(this.model, ids);
    }

    async searchRead<K extends T>(domain?: OdooDomain, opts?: OdooOptions): Promise<K[]> {
        return this.client.searchRead<K>(this.model, domain || [], opts);
    }

    async searchCount(domain?: OdooDomain): Promise<number> {
        return this.client.searchCount(this.model, domain || []);
    }

    async search(domain?: OdooDomain, opts?: OdooOptions): Promise<number[]> {
        return this.client.search(this.model, domain || [], opts);
    }

    async execute<K extends T | unknown>(
        method: string,
        domain?: OdooDomain,
        opts?: OdooOptions,
    ): Promise<K> {
        return this.client.execute<K>(this.model, method, domain, opts);
    }
}

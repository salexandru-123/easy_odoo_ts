import { OdooClient } from 'odoo-xmlrpc-ts';
import { OdooDomain, OdooOptions } from '../types/base';
export declare abstract class BaseOdooModel<T extends object> {
    protected readonly client: OdooClient;
    protected abstract readonly model: string;
    /**
     *
     */
    constructor(client: OdooClient);
    create<K extends T>(values: K): Promise<number>;
    createMulti<K extends T>(values: K[]): Promise<number[]>;
    read<K extends T>(ids: number[]): Promise<K[]>;
    write(ids: number[], values: Partial<T>): Promise<boolean>;
    unlink(ids: number[]): Promise<boolean>;
    searchRead<K extends T>(domain?: OdooDomain, opts?: OdooOptions): Promise<K[]>;
    searchCount(domain?: OdooDomain): Promise<number>;
    search(domain?: OdooDomain, opts?: OdooOptions): Promise<number[]>;
    execute<K extends T | unknown>(
        method: string,
        domain?: OdooDomain,
        opts?: OdooOptions,
    ): Promise<K>;
}

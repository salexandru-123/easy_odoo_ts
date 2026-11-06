import { OdooClient } from 'odoo-xmlrpc-ts';
import { OdooDomain, OdooOptions, OdooValues } from '../types/base';
export declare abstract class BaseOdooModel<T extends object> {
    protected readonly client: OdooClient;
    protected abstract readonly model: string;
    /**
     *
     */
    constructor(client: OdooClient);
    create(values: OdooValues): Promise<number>;
    read(ids: number[]): Promise<T[]>;
    write(ids: number[], values: OdooValues): Promise<boolean>;
    unlink(ids: number[]): Promise<boolean>;
    searchRead(domain?: OdooDomain, opts?: OdooOptions): Promise<T[]>;
    searchCount(domain?: OdooDomain): Promise<number>;
    search(domain?: OdooDomain, opts?: OdooOptions): Promise<number[]>;
    execute(method: string, domain?: OdooDomain, opts?: OdooOptions): Promise<unknown>;
}

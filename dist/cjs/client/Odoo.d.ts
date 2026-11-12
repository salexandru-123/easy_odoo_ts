import { OdooClient, OdooConfig } from 'odoo-xmlrpc-ts';
import { ModelInstances } from '../types/base';
export declare class Odoo {
    readonly client: OdooClient;
    readonly models: ModelInstances;
    /**
     *
     */
    constructor(config: OdooConfig);
    static connect<T extends typeof Odoo>(this: T, config: OdooConfig): Promise<InstanceType<T>>;
}

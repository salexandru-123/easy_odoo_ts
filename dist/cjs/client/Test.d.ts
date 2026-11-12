import { OdooClient, OdooConfig } from 'odoo-xmlrpc-ts';
import { ModelInstances } from '../types/base';
export declare class Test {
    readonly client: OdooClient;
    readonly models: ModelInstances;
    /**
     *
     */
    constructor(config: OdooConfig);
    static connect<T extends typeof Test>(this: T, config: OdooConfig): Promise<InstanceType<T>>;
}

import { OdooClient, OdooConfig } from 'odoo-xmlrpc-ts';
import { ModelInstances, ModelConstructor } from '../types/base';
import * as Models from '../models';
// type ModelName = (typeof Models)[keyof typeof Models];
export class Odoo {
    readonly client: OdooClient;
    readonly models: ModelInstances;
    /**
     *
     */
    constructor(config: OdooConfig) {
        this.client = new OdooClient(config);
        this.models = Object.fromEntries(
            Object.entries(Models)
                .filter(
                    ([_, model]) =>
                        typeof model === 'function' &&
                        model.prototype instanceof Models.BaseOdooModel,
                )
                .map(([name, Model]) => [
                    name.replace(/Model$/, '').replace(/^./, (char) => char.toLowerCase()),
                    new (Model as ModelConstructor)(this.client),
                ]),
        ) as Odoo['models'];
    }

    static async connect<T extends typeof Odoo>(
        this: T,
        config: OdooConfig,
    ): Promise<InstanceType<T>> {
        const odoo = new this(config) as InstanceType<T>;
        await odoo.client.authenticate();
        return odoo;
    }
}

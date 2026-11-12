# easy_odoo_ts

An Odoo wrapper of the base Odoo ORM Api, that allows the developers to easily work with Odoo using typescript.

# Requirements

- Node.js >= 18.0
- npm or pnpm

# Installation

Using npm:

```
npm i easy_odoo_ts
```

Using pnpm:

```
pnpm i easy_odoo_ts
```

# Usage

## Base Odoo Models

- Create the configuration to login to your odoo account and create an Odoo Instance:

    ```typescript
    import { Odoo } from 'easy_odoo_ts';

    const odooConfig = {
        url: 'your-odoo-domain',
        db: 'odoo-db',
        username: 'your-username',
        password: 'your-password-or-apitoken',
    };
    const odoo = await Odoo.connect(odooConfig);
    ```

- Easily use any model present on the base models of Odoo.
  In the following example we obtain all data from the ProductProduct model of your Odoo instance:

    ```typescript
    const products = await odoo.models.productProduct.searchRead();
    ```

- The above `products` will contain all typed data of the product.product model of Odoo.
    ```typescript
    // this is the type of products when we hover over it
    interface TProductProduct {
      account_tag_ids?: number[];
      active?: boolean;
      activity_date_deadline?: string;
      activity_exception_decoration?: string;
      activity_exception_icon?: string;
      activity_ids?: number[];
      activity_state?: string;
      ...
    }
    ```

## Use Custom models

- Create a custom type and class of the new Odoo object model you have installed on your Odoo Domain:
    ```typescript
    import { BaseOdooModel } from 'easy_odoo_ts';

    type NewModelType = {
        [prop: string]: any;
    };

    export class NewModel extends BaseOdooModel<NewModelType> {
        readonly model = 'some.model';

        // You can also add custom Odoo methods here
        // Example:
        async customMethod(args: any[], kwargs: object) {
            return await this.client.execute(this.model, 'odoo-method', args, kwargs);
        }
    }
    ```
- Create a custom client that implements the new model:
    ```typescript
    import { Odoo, type OdooConfig } from 'easy_odoo_ts';
    import { NewModel } from './customOdooModel';

    export default class CustomClient extends Odoo {
        readonly newModel: NewModel;
        /**
         *
         */
        constructor(config: OdooConfig) {
            super(config);
            this.newModel = new NewModel(this.client);
        }
    }
    ```
- Use the new model with the Odoo Orm Api methods:
    ```typescript
    import CustomClient from '../class/customClient';
    import type { OdooConfig } from 'easy_odoo_ts';
    const odooConfig: OdooConfig = {
        url: 'your-odoo-domain',
        db: 'database-name',
        username: 'user',
        password: 'password',
    };
    const odoo: CustomClient = await CustomClient.connect(odooConfig);

    const newModelResults = await odoo.newModel.searchRead();
    ```

# License

**MIT**

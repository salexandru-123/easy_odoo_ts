# odoo_ts

An Odoo wrapper of the base Odoo ORM Api, that allows the developers to easily work with Odoo using typescript.

# Requirements

- Node.js >= 18.0
- npm or pnpm  

# Installation

Using npm:
```
npm i @salexandru-123/odoo_ts
```

Using pnpm:
```
pnpm i @salexandru-123/odoo_ts
```

# Usage

- Create the configuration to login to your odoo account and create an Odoo Instance:
```typescript
import {Odoo} from 'odoo_ts'

const odooConfig = {
  url: "http://your-odoo-domain",
  db: "odoo-db",
  username: "your-username",
  password: "your-password-or-apitoken",
  }
const odoo = await Odoo.connect(odooConfig)

```

- Easily use any model present on the base models of Odoo.
In the following example we obtain all data from the ProductProduct model of your Odoo instance:
```typescript
const products = await odoo.productProduct.searchRead()
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

# License
**MIT**

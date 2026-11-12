'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    (function () {
        var ownKeys = function (o) {
            ownKeys =
                Object.getOwnPropertyNames ||
                function (o) {
                    var ar = [];
                    for (var k in o)
                        if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
                    return ar;
                };
            return ownKeys(o);
        };
        return function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
                for (var k = ownKeys(mod), i = 0; i < k.length; i++)
                    if (k[i] !== 'default') __createBinding(result, mod, k[i]);
            __setModuleDefault(result, mod);
            return result;
        };
    })();
Object.defineProperty(exports, '__esModule', { value: true });
exports.Odoo = void 0;
const odoo_xmlrpc_ts_1 = require('odoo-xmlrpc-ts');
const Models = __importStar(require('../models'));
// type ModelName = (typeof Models)[keyof typeof Models];
class Odoo {
    /**
     *
     */
    constructor(config) {
        this.client = new odoo_xmlrpc_ts_1.OdooClient(config);
        this.models = Object.fromEntries(
            Object.entries(Models)
                .filter(
                    ([_, model]) =>
                        typeof model === 'function' &&
                        model.prototype instanceof Models.BaseOdooModel,
                )
                .map(([name, Model]) => [
                    name.replace(/Model$/, '').replace(/^./, (char) => char.toLowerCase()),
                    new Model(this.client),
                ]),
        );
    }
    static async connect(config) {
        const odoo = new this(config);
        await odoo.client.authenticate();
        return odoo;
    }
}
exports.Odoo = Odoo;

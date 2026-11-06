"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOdooModel = void 0;
class BaseOdooModel {
    /**
     *
     */
    constructor(client) {
        this.client = client;
    }
    async create(values) {
        return this.client.create(this.model, values);
    }
    async read(ids) {
        return this.client.read(this.model, ids);
    }
    async write(ids, values) {
        return this.client.write(this.model, ids, values);
    }
    async unlink(ids) {
        return await this.client.unlink(this.model, ids);
    }
    async searchRead(domain, opts) {
        return this.client.searchRead(this.model, domain || [], opts);
    }
    async searchCount(domain) {
        return this.client.searchCount(this.model, domain || []);
    }
    async search(domain, opts) {
        return this.client.search(this.model, domain || [], opts);
    }
    async execute(method, domain, opts) {
        return this.client.execute(this.model, method, domain, opts);
    }
}
exports.BaseOdooModel = BaseOdooModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    setHeader(header) {
        if (!header.cookie && header.Authorization) {
            throw new Error('cookie or Authorization must be set');
        }
        this.header = header;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    setClient(client) {
        this.client = client;
        return this;
    }
}
exports.default = Base;

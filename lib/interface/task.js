"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("request-promise");
const base_1 = require("./base");
const consts_1 = require("../consts");
class Task extends base_1.default {
    /**
     * 创建单个任务
     * @param {Object} body
     * @memberof Task
     */
    createOne(body, projectType) {
        switch (projectType) {
            case 'taskflow':
                break;
            default:
                this.client = this.client || client;
                return client.post(this.url || consts_1.default.POST_CREATE_TASK_NORMAL, {
                    headers: this.header,
                    body,
                    timeout: 5000,
                    strictSSL: false,
                    json: true,
                });
        }
    }
}
exports.default = Task;

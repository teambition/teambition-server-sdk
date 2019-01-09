"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数据工厂，对数据进行加工、处理
 * @class DataFactory
 */
class DataFactory {
    constructor(raw, opts) {
        this.raw = raw;
        this.opts = opts;
    }
    /**
     * 数据分片请求获取
     * @param {function} job
     * @param {number} [capacity=200]
     * @returns {Promise<any>}
     * @memberof DataFactory
     */
    async JobSlice(job, capacity = 200, needReturn = true) {
        if (!Array.isArray(this.raw)) {
            throw new Error('raw must be an array');
        }
        if (typeof job !== 'function') {
            throw new Error('job must be a func');
        }
        // 分片请求
        const rawSize = this.raw.length;
        let ret = [];
        let result;
        let cursor = 0;
        // 保证顺序性
        while (true) {
            if (cursor >= rawSize) {
                break;
            }
            else {
                result = await job(this.raw.slice(cursor, cursor + capacity), this.opts);
                cursor += capacity;
                if (needReturn) {
                    ret = ret.concat(result);
                }
            }
        }
        return ret;
    }
}
exports.DataFactory = DataFactory;

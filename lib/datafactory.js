"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataFactory {
    constructor(raw) {
        this.raw = raw;
    }
    async JobSlice(job, capacity = 200) {
        if (!Array.isArray(this.raw)) {
            throw new Error('raw must be an array');
        }
        // 分片请求
        const dataSize = this.raw.length;
        let ret = [];
        let result;
        let index = 0;
        while (true) {
            if (capacity >= dataSize) {
                result = await job(this.raw.slice(index));
                ret = ret.concat(result);
                break;
            }
            else {
                result = await job(this.raw.slice(index, capacity));
                ret = ret.concat(result);
                index = capacity;
                capacity += capacity;
            }
        }
        return ret;
    }
}
exports.DataFactory = DataFactory;

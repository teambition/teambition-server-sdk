
/**
 * 数据工厂，对数据进行加工、处理
 * @class DataFactory
 */
export class DataFactory {
  private raw: any

  constructor (raw: any) {
    this.raw = raw
  }

  /**
   * 数据分片请求获取
   * @param {function} job
   * @param {number} [capacity=200]
   * @returns {Promise<any>}
   * @memberof DataFactory
   */
  async JobSlice(job: any, capacity: number = 200): Promise<any> {
    if (!Array.isArray(this.raw)) {
      throw new Error('raw must be an array')
    }
    if (typeof job !== 'function') {
      throw new Error('job must be a func')
    }

    // 分片请求
    const dataSize = this.raw.length
    let ret = []
    let result
    let start = 0
    let end = capacity

    // 保证顺序性
    while (true) {
      if (end >= dataSize) {
        result = await job(this.raw.slice(start))
        ret = ret.concat(result)
        break
      } else {
        result = await job(this.raw.slice(start, end))
        ret = ret.concat(result)
        start = end
        end = capacity + end
      }
    }
    return ret
  }
}
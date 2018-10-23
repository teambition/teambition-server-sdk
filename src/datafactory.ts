export class DataFactory {
  private raw: any

  constructor (raw: any) {
    this.raw = raw
  }

  async JobSlice(job: any, capacity: number = 200) {
    if (Array.isArray(this.raw)) {
      throw new Error('raw must be an array')
    }
    // 分片请求
    const dataSize = this.raw.length
    let ret = []
    let result
    let index = 0

    while (true) {
      if (capacity >= dataSize) {
        result = await job(this.raw.slice(index))
        ret = ret.concat(result)
        break
      } else {
        result = await job(this.raw.slice(index, capacity))
        ret = ret.concat(result)
        index = capacity
        capacity += capacity
      }
    }
    return ret
  }
}
import * as client from 'request-promise'
import Base from './base'
import consts from '../consts'

export default class Task extends Base {
  /**
   * 创建单个任务
   * @param {Object} body
   * @memberof Task
   */
  createOne (body: Object, projectType?: string) {
    switch (projectType) {
      case 'taskflow':
        break
      default:
        this.client = this.client || client
        return client.post(this.url || consts.POST_CREATE_TASK_NORMAL, {
          headers: this.header,
          body,
          timeout: 5000,
          strictSSL: false,
          json: true,
        })
    }
  }
}
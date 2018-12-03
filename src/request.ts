import * as request from 'request-promise'

interface RequestOptions extends request.OptionsWithUrl {
  retryDelay?: number
  maxAttempts?: number
}

export default class Request {
  private _retryDelay: number
  private _maxAttempts: number
  private _followTime: number
  private _switchWingman: boolean
  private _options: RequestOptions

  constructor () {
    this._switchWingman = false
  }

  setWingman (followTime: number) {
    this._switchWingman = true
    this._followTime = followTime || 200

    return this
  }

  public async execute (options: RequestOptions): Promise<Response> {
    this._retryDelay = options.retryDelay ? Math.floor(options.retryDelay) : 2000
    this._maxAttempts = options.maxAttempts ? Math.floor(options.maxAttempts) : 3
    this._options = options

    if (this._switchWingman) {
      return await Promise.race([
        this._request(),
        this._wingman()
      ])
    } else {
      return await this._request()
    }
  }

  private async _request () {
    let attempts = 0
    while (attempts < this._maxAttempts) {
      attempts++
      try {
        return await request(this._options)
      } catch (e) {
        await this._delay()
      }
    }
  }

  /**
   * execute after last request as a wingman
   * @private
   */
  private async _wingman () {
    await this._delay(this._followTime)

    return await this._request()
  }

  /**
   * method for wait
   */
  private _delay (delay?: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay || this._retryDelay)
    })
  }
}

interface Header {
  cookie: string
  'request-server': string
  Authorization: string
}

export default class Base {
  protected url: string
  protected header: Header
  protected client: any

  setHeader(header: Header) {
    if (!header.cookie && header.Authorization) {
      throw new Error('cookie or Authorization must be set')
    }

    this.header = header
    return this
  }

  setUrl (url: string) {
    this.url = url
    return this
  }

  setClient (client: any) {
    this.client = client
    return this
  }
}
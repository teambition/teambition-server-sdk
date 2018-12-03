import * as TeambitionSDK from '../src/index'
import * as expect from 'should'

describe('request test', () => {
  it('should request success', async () => {
    const request = new TeambitionSDK.Request()

    const res = await request.execute({
      url: 'https://baidu.com'
    })

    expect(res.body).not.null()
  })
})
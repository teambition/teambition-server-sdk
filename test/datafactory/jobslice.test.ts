import { DataFactory } from '../../src/datafactory'
import * as expect from 'should'

describe('src/datafactory.ts', () => {
  it('should use jobslice success', async () => {
    const array = new Array(20)
    const datafactory = new DataFactory(array)

    let count = 0
    const job = (raw) => {
      ++count
    }
    await datafactory.JobSlice(job, 5)
    expect(count).equal(4)
  })

  it('should throw error if raw not an array', async () => {
    try {
      const datafactory = new DataFactory('array')

      let count = 0
      const job = (raw) => {
        count += count
      }
      await datafactory.JobSlice(job, 5)
    } catch (error) {
      expect(error).be.Error()
    }
  })

  it('should throw error if job not a func', async () => {
    try {
      const array = new Array(20)
      const datafactory = new DataFactory(array)

      await datafactory.JobSlice('a', 5)
    } catch (error) {
      expect(error).be.Error()
    }
  })
})
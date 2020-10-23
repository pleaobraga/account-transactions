import { simulateRequest } from './utils'

describe('Utils', () => {
  it('Simulate Request function', () => {
    const data = { test: 'test' }

    return simulateRequest(data).then(resp => {
      expect(resp).toEqual({ data })
    })
  })
})

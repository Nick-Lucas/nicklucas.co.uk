import { datesToDuration } from './datesToDuration'

describe('datesToDuration', () => {
  it('should work', () => {
    const from = '2018-01'
    const to = '2019-01'
    const result = datesToDuration(from, to)
    expect(result).toEqual('1 year, 0 months')
  })
})

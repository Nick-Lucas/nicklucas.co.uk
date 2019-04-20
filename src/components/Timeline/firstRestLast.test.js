import { firstRestLast } from './firstRestLast'

describe('firstRestLast', () => {
  it('should work', () => {
    const input = [5, 6, 7, 8]
    const result = firstRestLast(input)
    expect(result).toEqual([5, [6, 7], 8])
  })
})

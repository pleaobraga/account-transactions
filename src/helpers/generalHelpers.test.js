import { formatPrice, formatTime, formatFullTime } from './generalHelpers'

describe('formatPrice', () => {
  it('should formate price', () => {
    expect(formatPrice(100)).toBe('R$100.00')
  })

  it('should formate negative price', () => {
    expect(formatPrice(-100)).toBe('-R$100.00')
  })

  it('should formate american currency', () => {
    expect(formatPrice(100, 'en-US', 'USD')).toBe('$100.00')
  })
})

describe('formatTime', () => {
  describe('Should add 0', () => {
    const values = [0, 1, 2, 3, 4, 5, 6]

    values.forEach((n) => {
      it(`should handle ${n}`, () => {
        expect(formatTime(n)).toBe(`0${n}`)
      })
    })
  })

  describe('Should not add 0', () => {
    const values = [10, 11, 12, 13, 14, 15, 16]

    values.forEach((n) => {
      it(`should handle ${n}`, () => {
        expect(formatTime(n)).toBe(n)
      })
    })
  })
})

describe('formatFullTime', () => {
  const values = ['19:00', '01:20', '20:45', '00:00', '12:59']

  values.forEach((n) => {
    const fullDate = '10-25-2020 ' + n

    it(`should get full time ${fullDate}`, () => {
      expect(formatFullTime(fullDate)).toBe(n)
    })
  })
})

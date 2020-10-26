import {
  getAccount,
  hasObjectAttributes,
  isAccountDataValid,
} from './accountHelpers'

jest.mock('../services/accountDetails', () => ({
  getAccountDetails: jest
    .fn()
    .mockReturnValueOnce(null)
    .mockReturnValueOnce({ id: '12', amount: 0, transactions: [] })
    .mockReturnValueOnce('getAccountDetails'),
  putAccountDetails: () => 'putAccountDetails',
}))

describe('getAccount', () => {
  it('should create new account', () => {
    expect(getAccount(12)).toBe('putAccountDetails')
  })

  it('should return account', () => {
    expect(getAccount(12)).toStrictEqual({
      id: '12',
      amount: 0,
      transactions: [],
    })
  })

  it('should return error', () => {
    expect(getAccount(12)).toStrictEqual({
      error: { message: 'Dados da conta corrompida' },
    })
  })
})

describe('hasObjectAttributes', () => {
  it('Should have same attribules', () => {
    const accountAttr = [
      { name: 'string', type: 'string' },
      { name: 'number', type: 'number' },
      { name: 'date', type: 'date' },
      { name: 'array', type: 'array' },
    ]

    const obj = {
      string: 'a',
      number: 1,
      date: '12',
      array: [],
    }

    expect(hasObjectAttributes(obj, accountAttr)).toBe(true)
  })

  describe('Should have differents attibutes', () => {
    it('string', () => {
      const accountAttr = [{ name: 'string', type: 'string' }]

      const obj = {
        string: 1,
      }

      expect(hasObjectAttributes(obj, accountAttr)).toBe(false)
    })

    it('number', () => {
      const accountAttr = [{ name: 'number', type: 'number' }]

      const obj = {
        number: '1',
      }

      expect(hasObjectAttributes(obj, accountAttr)).toBe(false)
    })

    it('date', () => {
      const accountAttr = [{ name: 'date', type: 'date' }]

      const obj = {
        date: '12:00',
      }

      expect(hasObjectAttributes(obj, accountAttr)).toBe(false)
    })

    it('array', () => {
      const accountAttr = [{ name: 'array', type: 'array' }]

      const obj = {
        array: 'teste',
      }

      expect(hasObjectAttributes(obj, accountAttr)).toBe(false)
    })
  })

  it('should not have the attribute', () => {
    const accountAttr = [{ name: 'test', type: 'string' }]

    const obj = {
      array: [],
    }

    expect(hasObjectAttributes(obj, accountAttr)).toBe(false)
  })
})

describe('isAccountDataValid', () => {
  it('should be valid account', () => {
    const account = {
      id: '0',
      amount: 200,
      transactions: [
        {
          description: 'test',
          amount: 100,
          date: '12',
          operation: {
            name: 'withdraw',
            label: 'Retirada',
            operationType: 'OPERATION_NEGATIVE',
          },
        },
      ],
    }

    expect(isAccountDataValid(account)).toBe(true)
  })

  it('should not be valid account', () => {
    const account = {
      id: '0',
      amount: '200',
      transactions: 0,
    }

    expect(isAccountDataValid(account)).toBe(false)
  })
})

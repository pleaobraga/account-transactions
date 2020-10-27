import React from 'react'
import { shallow } from 'enzyme'
import TotalBalance from './TotalBalance'

jest.mock('../../../helpers/generalHelpers', () => ({
  formatPrice: (a) => 'R$' + a + '.00',
}))

describe('Total Balance', () => {
  const wrapper = shallow(<TotalBalance amount={100} />)

  it('should render component properly', () => {
    expect(wrapper.find('.balance').length).toBe(1)
  })

  describe('Should render title', () => {
    it('should render properly', () => {
      expect(wrapper.find('.balance__title').length).toBe(1)
    })

    it('should render title text ', () => {
      const title = wrapper.find('.balance__title')
      expect(title.text()).toEqual('Saldo Total')
    })
  })

  describe('Should render amount', () => {
    it('should render properly', () => {
      expect(wrapper.find('.balance__value').length).toBe(1)
    })

    it('should render amount value ', () => {
      const amount = wrapper.find('.balance__value')
      expect(amount.text()).toEqual('R$100.00')
    })
  })
})

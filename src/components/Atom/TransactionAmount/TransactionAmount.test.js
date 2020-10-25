import React from 'react'
import { shallow } from 'enzyme'
import TransactionAmount from './TransactionAmount'

const setup = (props = {}) => {
  const newProps = {
    amount: 100,
    ...props,
  }

  return shallow(<TransactionAmount {...newProps} />)
}

describe('Transaction Amount', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find('.transition-amount').length).toBe(1)
  })

  describe('should render positive value', () => {
    const wrapper = setup()

    it('should render positive class', () => {
      expect(wrapper.find('.transition-amount--positive').length).toBe(1)
    })

    it('should render positive style', () => {
      expect(wrapper.text()).toBe('+R$100.00')
    })
  })

  describe('should render negative value', () => {
    const wrapper = setup({ amount: -100 })

    it('should render negative style', () => {
      expect(wrapper.find('.transition-amount--negative').length).toBe(1)
    })

    it('should render negative value', () => {
      expect(wrapper.text()).toBe('-R$100.00')
    })
  })
})

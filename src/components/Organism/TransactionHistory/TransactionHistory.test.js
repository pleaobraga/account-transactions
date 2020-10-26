import React from 'react'
import { mount } from 'enzyme'
import TransactionHistory from './TransactionHistory'

const setup = (props = {}) => {
  const newProps = {
    transactions: [],
    ...props,
  }

  return mount(<TransactionHistory {...newProps} />)
}

describe('TransactionHistory', () => {
  const wrapper = setup()

  it('should render component properly', () => {
    expect(wrapper.find(TransactionHistory).length).toBe(1)
  })

  describe('Should Render title', () => {
    it('should render title properly', () => {
      expect(wrapper.find('.transaction-history__title').length).toBe(1)
    })

    it('should render title value ', () => {
      const title = wrapper.find('.transaction-history__title')
      expect(title.text()).toEqual('Histórico de Transações')
    })
  })

  describe('Should Render empty list', () => {
    it('should render text', () => {
      expect(wrapper.find('.transaction-history__empty-list').length).toBe(1)
    })

    it('should not render list ', () => {
      expect(wrapper.find('.transaction-history__list').length).toBe(0)
    })
  })

  describe('Should Render list', () => {
    const now = new Date('10-25-2020')

    const transactions = [
      {
        id: 0,
        date: now,
        amount: 32,
      },
      {
        id: 1,
        date: now,
        amount: -32,
      },
    ]

    const wrapper = setup({ transactions })

    it('should not render empty text', () => {
      expect(wrapper.find('.transaction-history__empty-list').length).toBe(0)
    })

    it('should render list ', () => {
      expect(wrapper.find('.transaction-history__list').length).toBe(1)
    })

    it('should render  list items ', () => {
      expect(wrapper.find('.transaction-history__list-item').length).toBe(2)
    })
  })
})

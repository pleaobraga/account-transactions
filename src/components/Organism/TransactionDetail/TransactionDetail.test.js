import React from 'react'
import { mount } from 'enzyme'
import TransactionDetail from './TransactionDetail'
import { Calendar } from '../../Molecule/Calendar'
import { HoursFormat } from '../../Atom/HoursFormat'

const setup = (props = {}) => {
  const newProps = {
    id: 0,
    amount: 100,
    date: new Date('10-25-2020'),
    description: 'teste',
    ...props,
  }

  return mount(<TransactionDetail {...newProps} />)
}

describe('TransactionDetail', () => {
  const wrapper = setup()

  it('should render component properly', () => {
    expect(wrapper.find(TransactionDetail).length).toBe(1)
  })

  describe('Should render description', () => {
    it('should render title properly', () => {
      expect(wrapper.find('.description__title').length).toBe(1)
    })

    it('should render label value ', () => {
      const title = wrapper.find('.description__title')
      expect(title.text()).toEqual('teste')
    })

    it('should render amount properly', () => {
      expect(wrapper.find('.description__value').length).toBe(1)
    })

    it('should render amount value', () => {
      const title = wrapper.find('.description__value')
      expect(title.text()).toEqual('+R$100.00')
    })
  })

  describe('Should render date', () => {
    it('should render calendar properly', () => {
      expect(wrapper.find(Calendar).length).toBe(1)
    })

    it('should render calendar properly', () => {
      expect(wrapper.find(HoursFormat).length).toBe(1)
    })
  })
})

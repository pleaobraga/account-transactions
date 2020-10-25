import React from 'react'
import { shallow } from 'enzyme'
import Calendar from './Calendar'

describe('Calendar Format', () => {
  const date = new Date('10-25-2020')

  const wrapper = shallow(<Calendar date={date} />)

  it('should render component properly', () => {
    expect(wrapper.find('.calendar').length).toBe(1)
  })

  describe('Should render year', () => {
    it('should render  properly', () => {
      expect(wrapper.find('.calendar__year-wrapper').length).toBe(1)
    })

    it('should render value ', () => {
      const year = wrapper.find('.calendar__year')
      expect(year.text()).toEqual('2020')
    })
  })

  describe('Should render day', () => {
    it('should render  properly', () => {
      expect(wrapper.find('.calendar__day').length).toBe(1)
    })

    it('should render value ', () => {
      const day = wrapper.find('.calendar__day')
      expect(day.text()).toEqual('25')
    })
  })

  describe('Should render month', () => {
    it('should render  properly', () => {
      expect(wrapper.find('.calendar__month').length).toBe(1)
    })

    it('should render value ', () => {
      const month = wrapper.find('.calendar__month')
      expect(month.text()).toEqual('Out')
    })
  })
})

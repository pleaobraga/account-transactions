import React from 'react'
import { mount } from 'enzyme'
import AccountPage from './AccountPage'
import { NewTransactionForm } from '../../components/Organism/NewTransactionForm'
import { BrowserRouter as Router } from 'react-router-dom'

describe('AccountPage', () => {
  const wrapper = mount(
    <Router>
      <AccountPage />
    </Router>
  )

  it('should render component properly', () => {
    expect(wrapper.find(AccountPage).length).toBe(1)
  })

  it('should not render form', () => {
    expect(wrapper.find(NewTransactionForm).length).toBe(0)
  })

  describe('Should handle form', () => {
    it('should render open  form button', () => {
      expect(wrapper.find('Button.open-form-btn').length).toBe(1)
    })

    it('should open form', () => {
      const button = wrapper.find('Button.open-form-btn')

      button.simulate('click')

      wrapper.update()

      expect(wrapper.find(NewTransactionForm).length).toBe(1)
    })

    it('should not render open  form button', () => {
      expect(wrapper.find('Button.open-form-btn').length).toBe(0)
    })

    it('should close form', () => {
      const button = wrapper.find('Button.form__button--cancel')

      button.simulate('click')

      wrapper.update()

      expect(wrapper.find(NewTransactionForm).length).toBe(0)
    })
  })
})

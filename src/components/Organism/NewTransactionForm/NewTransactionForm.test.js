import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { Input } from '../../Atom/Input'
import { Select } from '../../Atom/Select'
import NewTransactionForm from './NewTransactionForm'

jest.mock('../../../services/accountDetails', () => ({
  postAccountDetails: () => ({}),
}))

describe('New Transaction Form', () => {
  const props = {
    afterSave: jest.fn(),
    onCancel: jest.fn(),
    accountId: '0',
  }

  const wrapper = mount(<NewTransactionForm {...props} />)

  it('should render component properly', () => {
    expect(wrapper.find(NewTransactionForm).length).toBe(1)
  })

  it('should render Form properly', () => {
    expect(wrapper.find(Formik).length).toBe(1)
  })

  describe('Should render title', () => {
    it('should render  properly', () => {
      expect(wrapper.find('.new-transaction__title').length).toBe(1)
    })

    it('should render value ', () => {
      const title = wrapper.find('.new-transaction__title')
      expect(title.text()).toEqual('Nova Transação')
    })
  })

  describe('Should render fields', () => {
    it('should render input properly', () => {
      expect(wrapper.find(Input).length).toBe(2)
    })

    it('should render select properly', () => {
      expect(wrapper.find(Select).length).toBe(1)
    })
  })

  describe('Should render action buttons', () => {
    describe('Submit button', () => {
      it('should render properly', () => {
        expect(wrapper.find('Button.form__button--submit').length).toBe(1)
      })

      it('should render value ', () => {
        const submitButton = wrapper.find('Button.form__button--submit')
        expect(submitButton.text()).toEqual('Enviar Transação')
      })

      it('should not submit ', () => {
        const submitButton = wrapper.find('button.form__button--submit')
        submitButton.simulate('click')
        expect(props.afterSave.mock.calls.length).toBe(0)
      })
    })

    describe('Cancel button', () => {
      it('should render properly', () => {
        expect(wrapper.find('Button.form__button--cancel').length).toBe(1)
      })

      it('should render value ', () => {
        const cancelButton = wrapper.find('Button.form__button--cancel')
        expect(cancelButton.text()).toEqual('Cancelar')
      })

      it('should cancel ', () => {
        const cancelButton = wrapper.find('button.form__button--cancel')
        cancelButton.simulate('click')
        expect(props.onCancel.mock.calls.length).toBe(1)
      })
    })
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

const setup = (props = {}) => {
  const newProps = {
    className: 'test',
    name: 'inputTest',
    touched: {},
    errors: {},
    handleChange: jest.fn(),
    ...props,
  }

  return shallow(<Input {...newProps} />)
}

describe('Input', () => {
  describe('Render only field', () => {
    const wrapper = setup()

    it('should render component properly', () => {
      expect(wrapper.find('.input').length).toBe(1)
    })

    it('should render field properly', () => {
      expect(wrapper.find('.input__field').length).toBe(1)
    })

    it('should not render label', () => {
      expect(wrapper.find('.input__label').length).toBe(0)
    })

    it('should not render error message', () => {
      expect(wrapper.find('.input__error-text').length).toBe(0)
    })
  })

  describe('Render label', () => {
    const wrapper = setup({ label: 'labelTest' })

    it('should render label properly', () => {
      expect(wrapper.find('.input__label').length).toBe(1)
    })

    it('should render label value ', () => {
      const label = wrapper.find('.input__label')
      expect(label.text()).toEqual('labelTest')
    })
  })

  describe('Render error text', () => {
    const wrapper = setup({
      touched: { inputTest: true },
      errors: { inputTest: 'campo obrigatório' },
    })

    it('should render error text properly', () => {
      expect(wrapper.find('.input__error-text').length).toBe(1)
    })

    it('should render label value ', () => {
      const errorText = wrapper.find('.input__error-text')
      expect(errorText.text()).toEqual('campo obrigatório')
    })
  })
})

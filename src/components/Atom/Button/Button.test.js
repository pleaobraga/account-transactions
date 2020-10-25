import React from 'react'
import { mount } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  const onClick = jest.fn()

  const wrapper = mount(
    <Button onClick={onClick}>
      <span className="test">test</span>
    </Button>
  )

  it('should render properly', () => {
    expect(wrapper.find('.button').length).toBe(1)
  })

  it('should render other className', () => {
    expect(wrapper.find('.test').length).toBe(1)
  })

  it('should render children', () => {
    expect(wrapper.find('.test').length).toBe(1)
  })

  it('should execute click function', () => {
    wrapper.find(Button).simulate('click')

    expect(onClick.mock.calls.length).toBe(1)
  })
})

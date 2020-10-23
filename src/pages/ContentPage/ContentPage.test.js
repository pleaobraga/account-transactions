jest.mock('../../utils/utils')
import 'babel-polyfill'
import React from 'react'
import { mount } from 'enzyme'
import ContentPage from './ContentPage'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialStateRootReducer
} from '../../redux/__mocks__/reduxMock'

const setup = state => {
  const newState = {
    content: {
      ...initialStateRootReducer.content,
      ...state
    }
  }


  const store = mockStore(newState)

  const contentPage = mount(
    <Provider store={store}>
      <ContentPage />
    </Provider>
  )

  return contentPage
}

describe('Content Page', () => {
  it('should render loading correctly', () => {
    const contentPage = setup()

    expect(contentPage).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    const newState = {
      content: { text: 'text', title: 'title' }
    }

    const contentPage = setup(newState)

    expect(contentPage).toMatchSnapshot()
  })

  it('should render error correctly', () => {
    const newState = {
      errorContent: true
    }

    const contentPage = setup(newState)

    expect(contentPage).toMatchSnapshot()
  })
})

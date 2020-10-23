import React from 'react'
import { storiesOf } from '@storybook/react'
import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'
import ContentPage from './ContentPage'

const initialState = {
  content: { title: 'Title', text: 'Text' },
  loadingContent: false,
  errorContent: false
}

const newStore = store(initialState)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

const getContent = () => {}

export default storiesOf('Pages | ContentPage', module)
  .addDecorator(withProvider)
  .add('default', () => <ContentPage getContent={getContent} />, {
    info: { inline: true, header: false }
  })

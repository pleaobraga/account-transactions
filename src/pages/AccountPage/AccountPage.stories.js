import React from 'react'
import { storiesOf } from '@storybook/react'
import AccountPage from './AccountPage'

export default storiesOf('Pages | AccountPage', module).add(
  'default',
  () => <AccountPage />,
  { info: { inline: true, header: false } }
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import AccountPage from './AccountPage'
import { BrowserRouter as Router } from 'react-router-dom'

export default storiesOf('Pages | AccountPage', module).add(
  'default',
  () => (
    <Router>
      <AccountPage />
    </Router>
  ),
  { info: { inline: true, header: false } }
)

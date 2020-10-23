import React from 'react'
import { storiesOf } from '@storybook/react'
import WelcomePage from './WelcomePage'

export default storiesOf('Pages | WelcomePage', module).add(
  'default',
  () => <WelcomePage />,
  { info: { inline: true, header: false } }
)

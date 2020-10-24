import React from 'react'
import { storiesOf } from '@storybook/react'
import NewTransaction from './NewTransaction'

export default storiesOf('Components | Organism/New Transaction', module).add(
  'default',
  () => <NewTransaction />,
  {
    info: { inline: true, header: false },
  }
)

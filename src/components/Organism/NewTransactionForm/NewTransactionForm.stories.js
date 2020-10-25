import React from 'react'
import { storiesOf } from '@storybook/react'
import NewTransactionForm from './NewTransactionForm'

export default storiesOf('Components | Organism/New Transaction', module).add(
  'default',
  () => <NewTransactionForm />,
  {
    info: { inline: true, header: false },
  }
)

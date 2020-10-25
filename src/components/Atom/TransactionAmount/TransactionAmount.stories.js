import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import TransactionAmount from './TransactionAmount'

export default storiesOf('Components | Atom/Transaction Amount', module).add(
  'default',
  () => <TransactionAmount amount={number('Amount', 32)} />,
  {
    info: { inline: true, header: false },
  }
)

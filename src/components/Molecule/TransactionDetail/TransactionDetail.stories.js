import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import TransactionDetail from './TransactionDetail'

const now = new Date()

export default storiesOf(
  'Components | Molecule/Transaction detail',
  module
).add(
  'default',
  () => <TransactionDetail date={now} amount={number('amount', 32)} />,
  {
    info: { inline: true, header: false },
  }
)

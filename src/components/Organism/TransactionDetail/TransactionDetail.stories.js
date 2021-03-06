import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'
import TransactionDetail from './TransactionDetail'

const now = new Date()

export default storiesOf(
  'Components | Organism/Transaction Detail',
  module
).add(
  'default',
  () => (
    <TransactionDetail
      date={now}
      amount={number('amount', 32)}
      description={text('description', 'Description')}
    />
  ),
  {
    info: { inline: true, header: false },
  }
)

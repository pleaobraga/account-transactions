import React from 'react'
import { storiesOf } from '@storybook/react'
// import { number } from '@storybook/addon-knobs'
import TransactionDetail from './TransactionDetail'

export default storiesOf(
  'Components | Molecule/Transaction detail',
  module
).add('default', () => <TransactionDetail />, {
  info: { inline: true, header: false },
})

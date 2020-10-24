import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import TransationAmount from './TransationAmount'

export default storiesOf('Components | Atom/Transation Amount', module).add(
  'default',
  () => <TransationAmount amount={number('Amount', 32)} />,
  {
    info: { inline: true, header: false },
  }
)

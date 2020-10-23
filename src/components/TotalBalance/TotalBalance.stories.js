import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import TotalBalance from './TotalBalance'

export default storiesOf('Components | Card', module).add(
  'default',
  () => <TotalBalance amount={number('Amount', 32)} />,
  { info: { inline: true, header: false } }
)

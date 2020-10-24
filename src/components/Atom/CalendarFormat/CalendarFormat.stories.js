import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import CalendarFormat from './CalendarFormat'

export default storiesOf('Components | Atom/Calendar Format', module).add(
  'default',
  () => <CalendarFormat date={number('Date', 32)} />,
  {
    info: { inline: true, header: false },
  }
)

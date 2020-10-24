import React from 'react'
import { storiesOf } from '@storybook/react'
import CalendarFormat from './CalendarFormat'

const now = new Date()

export default storiesOf('Components | Molecule/Calendar Format', module).add(
  'default',
  () => <CalendarFormat date={now} />,
  {
    info: { inline: true, header: false },
  }
)

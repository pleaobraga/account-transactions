import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from './Calendar'

const now = new Date()

export default storiesOf('Components | Molecule/Calendar', module).add(
  'default',
  () => <Calendar date={now} />,
  {
    info: { inline: true, header: false },
  }
)

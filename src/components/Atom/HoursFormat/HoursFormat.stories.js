import React from 'react'
import { storiesOf } from '@storybook/react'
import HoursFormat from './HoursFormat'

const now = new Date()

export default storiesOf('Components | Atom/Hours Format', module).add(
  'default',
  () => <HoursFormat date={now} />,
  {
    info: { inline: true, header: false },
  }
)

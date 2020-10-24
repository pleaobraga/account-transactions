import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Button from './Button'

export default storiesOf('Components | Atom/Button', module).add(
  'default',
  () => <Button onClick={() => {}}>{text('Text', 'Text')}</Button>,
  {
    info: { inline: true, header: false },
  }
)

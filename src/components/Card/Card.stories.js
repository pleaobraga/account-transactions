import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Card from './Card'

export default storiesOf('Components | Card', module).add(
  'default',
  () => <Card title={text('Title', 'Title')} text={text('Text', 'Text')} />,
  { info: { inline: true, header: false } }
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Loading from './Loading'

export default storiesOf('Components | Loading', module).add(
  'default',
  () => <Loading color={text('Loader Color', '#298a95')} />,
  { info: { inline: true, header: false } }
)

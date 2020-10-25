import React from 'react'
import { storiesOf } from '@storybook/react'
import DynamicImport from './DynamicImport'

export default storiesOf('Components | DynamicImport', module).add(
  'default',
  () => <DynamicImport loadComponent={() => Promise.resolve('data')} />,
  { info: { inline: true, header: false } }
)

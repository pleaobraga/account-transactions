import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import * as Yup from 'yup'
import { withFormValues } from '../../../../.storybook/withFormValues'

import Input from './Input'

export default storiesOf('Components | Atom/Input', module)
  .addDecorator(
    withFormValues(
      { test: undefined },
      Yup.object().shape({
        test: Yup.string().required('campo obrigatorio'),
      })
    )
  )
  .add(
    'default',
    (props) => <Input {...props} name="test" label={text('Label', 'Label')} />,
    {
      info: { inline: true, header: false, propTables: [Input] },
    }
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import * as Yup from 'yup'
import { withFormValues } from '../../../../.storybook/withFormValues'

import Select from './Select'

export default storiesOf('Components | Atom/Select', module)
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
    (props) => (
      <form>
        <Select {...props} name="test" label={text('Label', 'Label')}>
          <option value="withdraw">Retirada</option>
          <option value="deposit">Deposito</option>
        </Select>
      </form>
    ),
    {
      info: { inline: true, header: false, propTables: [Select] },
    }
  )

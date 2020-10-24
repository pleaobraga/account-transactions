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
    (props) => (
      <form>
        <Input {...props} name="test" label={text('Label', 'Label')} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            props.setTouched({ test: true }, true)
          }}
        >
          enviar
        </button>
      </form>
    ),
    {
      info: { inline: true, header: false, propTables: [Input] },
    }
  )

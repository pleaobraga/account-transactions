import React from 'react'
import { Formik } from 'formik'
import { Input } from '../../Atom/Input'
import { Select } from '../../Atom/Select'
import { Button } from '../../Atom/Button'
import { formValidation, initialValues } from './formHelper'
import { operations } from '../../../utils/utils'
import './NewTransaction.scss'

const NewTransaction = () => {
  const onSubmit = () => {}

  return (
    <section className="new-transaction">
      <h2 className="new-transaction__title">Nova Transação</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          return (
            <form onSubmit={formikProps.handleSubmit} className="form">
              <Input
                {...formikProps}
                label="Descrição"
                name="description"
                maxlength="50"
              />
              <Select {...formikProps} label="Operação" name="operation">
                {operations.map(({ label }, index) => (
                  <option value={index} key="label">
                    {label}
                  </option>
                ))}
              </Select>
              <Input {...formikProps} label="Valor" name="amount" />
              <Button type="submit" className="form__button">
                Enviar
              </Button>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

export default NewTransaction

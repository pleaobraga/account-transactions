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
              <div className="form__fields">
                <Input
                  {...formikProps}
                  label="Descrição"
                  name="description"
                  maxlength="50"
                  className="input--description"
                />
                <Input {...formikProps} label="Valor" name="amount" />
                <Select {...formikProps} label="Operação" name="operation">
                  {operations.map(({ label }, index) => (
                    <option value={index} key="label">
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <Button type="submit" className="form__button">
                Enviar Tranzação
              </Button>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

export default NewTransaction

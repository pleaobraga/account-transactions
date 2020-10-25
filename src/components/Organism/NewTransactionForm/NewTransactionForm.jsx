import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Input } from '../../Atom/Input'
import { Select } from '../../Atom/Select'
import { Button } from '../../Atom/Button'
import { formValidation, initialValues } from './formHelper'
import { operations } from '../../../utils/utils'
import './NewTransactionForm.scss'

const NewTransaction = ({ onCancel }) => {
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
                <Input {...formikProps} label="Valor R$" name="amount" />
                <Select {...formikProps} label="Operação" name="operation">
                  {operations.map(({ label }, index) => (
                    <option value={index} key="label">
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="form__actions">
                <Button
                  type="submit"
                  className="form__button form__button--submit"
                >
                  Enviar Transação
                </Button>
                <Button
                  type="reset"
                  className="form__button form__button--cancel"
                  onClick={onCancel}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

NewTransaction.propTypes = {
  onCancel: PropTypes.func.isRequired,
}

export default NewTransaction

import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Input } from '../../Atom/Input'
import { Select } from '../../Atom/Select'
import { Button } from '../../Atom/Button'
import { formValidation, initialValues, formatTransaction } from './formHelper'
import { operations } from '../../../utils/utils'
import { postAccountDetails } from '../../../services/accountDetails'
import './NewTransactionForm.scss'

const NewTransaction = ({ onCancel, afterSave, accountId }) => {
  const onSubmit = (values) => {
    const now = new Date()
    const transaction = formatTransaction({ ...values, date: now })

    const updatedAccount = postAccountDetails(accountId, transaction)
    afterSave(updatedAccount)
  }

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
                  maxLength="50"
                  className="input--description"
                  test-data-id="description-input"
                />
                <Input
                  {...formikProps}
                  label="Valor R$"
                  name="amount"
                  test-data-id="amount-input"
                  type="number"
                />
                <Select
                  {...formikProps}
                  label="Operação"
                  name="operation"
                  test-data-id="operation-select"
                >
                  {operations.map(({ label }, index) => (
                    <option value={index} key={label}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="form__actions">
                <Button
                  type="submit"
                  className="form__button form__button--submit"
                  onClick={formikProps.handleSubmit}
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
  accountId: PropTypes.string.isRequired,
  afterSave: PropTypes.func,
}

export default NewTransaction

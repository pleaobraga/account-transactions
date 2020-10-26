import * as Yup from 'yup'
import { OPERATION_NEGATIVE } from '../../../helpers/constants'
import { operations } from '../../../helpers/accountHelpers'

export const formValidation = Yup.object().shape({
  description: Yup.string().required('Campo Obrigatório'),
  operation: Yup.number().min(0, 'Campo Obrigatório'),
  amount: Yup.number()
    .min(0.1, 'Valor mínimo 0.1')
    .max(1000000000, 'Valor máximo 1 bilhão'),
})

export const initialValues = {
  description: '',
  operation: -1,
  amount: 0,
}

export const formatTransaction = (values) => {
  const transaction = {
    ...values,
    amount: parseFloat(values.amount),
    operation: operations[values.operation],
  }

  if (transaction.operation.operationType === OPERATION_NEGATIVE) {
    transaction.amount *= -1
  }

  return transaction
}

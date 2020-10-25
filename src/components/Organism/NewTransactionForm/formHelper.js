import * as Yup from 'yup'

export const formValidation = Yup.object().shape({
  description: Yup.string().required('Campo Obrigatório'),
  operation: Yup.number().min(0, 'Campo Obrigatório'),
  amount: Yup.number().required('Campo Obrigatório'),
})

export const initialValues = {
  description: '',
  operation: -1,
  amount: 0,
}

import { Input, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormComponentProps } from '../../types/props'
import { IRootState } from '../../utils/store'
import { updateQuestion } from '../../actions/businessContractFormActions'

/**
 * @component
 * @desc Renders a single text-input question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormText: React.FC<FormComponentProps> = ({ question }) => {

  const { title } = question
  let { answer } = question

  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  let index:any = question?.ordering

  const handleChange = (e:any) => {
    dispatch(
      updateQuestion({ ...questions[index], answer: e.target.value }, index)
    )

  }

  console.log('qustions:  ', question)
  console.log('question.ordering:  ', question.ordering)
  //console.log('state:  ', state)

  return (
    <>
      <Typography variant="h6" >{ title }</Typography>
      <Input
        value={answer || ''}
        onChange={handleChange} />
    </>
   )
}

export default BusinssContractFormText
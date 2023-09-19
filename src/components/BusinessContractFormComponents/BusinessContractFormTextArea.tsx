import { TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuestion } from '../../actions/businessContractFormActions'
import { FormComponentProps } from '../../types/props'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc Renders a single text-area question in business contract form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormTextArea: React.FC<FormComponentProps> = ({ question }) => {
  const { title, subTitle, rows } = question

  let { answer } = question

  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  let index: any = question?.ordering

  const handleChange = (e: any) => {
    dispatch(updateQuestion({ ...questions[index], answer: e.target.value }, index))
  }

  return (
    <>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant='body1'>{subTitle}</Typography>
      <TextField
        value={answer || ''}
        onChange={handleChange}
        multiline
        rows={rows}
        variant='outlined'
      />
    </>
  )
}

export default BusinssContractFormTextArea

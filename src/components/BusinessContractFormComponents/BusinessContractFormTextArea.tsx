import { TextField, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single text-area question in business contract form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormTextArea: React.FC<FormComponentProps> = ({ question }) => {
  const { title, subTitle, rows } = question

  const handleChange = (e:any) => {
      question.answer = e.target.value
  }
  return (
    <>
      <Typography variant="h6" >{ title }</Typography>
      <Typography variant="body1" >{subTitle}</Typography>
      <TextField onChange={handleChange}  multiline rows={rows} variant="outlined"/>
    </>
   )
}

export default BusinssContractFormTextArea
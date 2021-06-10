import { TextField, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single text-area question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormTextArea: React.FC<FormComponentProps> = ({ question }) => {
  const { title, rows, subTitle } = question
  return (
    <>
      <Typography variant="h6" >{ title }</Typography>
      <Typography variant="body1" >{subTitle}</Typography>
      <TextField multiline rows={rows} variant="outlined"/>
    </>
   )
}

export default FormTextArea
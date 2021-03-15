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
  const { name, rowHeight } = question
  return ( 
    <>
      <Typography variant="h6" >{ name }</Typography>
      <Typography variant="body1" >This is an optional sub for questions fyi.</Typography>
      <TextField multiline rows={rowHeight} variant="outlined"/>
    </>
   )
}
 
export default FormTextArea
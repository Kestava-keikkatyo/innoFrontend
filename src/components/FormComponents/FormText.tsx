import { Input, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single text-input question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormText: React.FC<FormComponentProps> = ({ question }) => {
  const { name } = question
  return ( 
    <>
      <Typography variant="h6" >{ name }</Typography>
      <Input />
    </>
   )
}
 
export default FormText
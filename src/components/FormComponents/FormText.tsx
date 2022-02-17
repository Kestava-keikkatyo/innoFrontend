import { Input, Typography } from '@mui/material'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single text-input question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormText: React.FC<FormComponentProps> = ({ question }) => {
  const { title } = question
  return ( 
    <>
      <Typography variant="h6" >{ title }</Typography>
      <Input />
    </>
   )
}
 
export default FormText
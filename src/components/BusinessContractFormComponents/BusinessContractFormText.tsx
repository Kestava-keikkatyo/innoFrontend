import { Input, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single text-input question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormText: React.FC<FormComponentProps> = ({ question }) => {
  const { title } = question

  const handleChange = (e:any) => {
    question.answer= e.target.value
  }

  return (
    <>
      <Typography variant="h6" >{ title }</Typography>
      <Input onChange={handleChange} />
    </>
   )
}

export default BusinssContractFormText
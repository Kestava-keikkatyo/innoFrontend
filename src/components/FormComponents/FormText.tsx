import { Input, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types'

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
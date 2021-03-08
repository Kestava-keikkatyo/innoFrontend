import { Input, Typography } from '@material-ui/core'
import React from 'react'

const FormText = ({ question }) => {
  const { name } = question
  return ( 
    <>
      <Typography variant="h6" >{ name }</Typography>
      <Input />
    </>
   )
}
 
export default FormText
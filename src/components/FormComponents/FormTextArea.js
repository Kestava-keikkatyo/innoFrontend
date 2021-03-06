import { TextField, Typography } from '@material-ui/core'
import React from 'react'

const FormTextArea = () => {
  return ( 
    <>
      <Typography variant="h6" >2. Write an essay of your life.</Typography>
      <Typography variant="body1" >This is an optional sub for questions fyi.</Typography>
      <TextField multiline rows={4} variant="outlined"/>
    </>
   )
}
 
export default FormTextArea
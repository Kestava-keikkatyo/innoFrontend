import { Typography } from '@material-ui/core';
import React from 'react'

const FormComment = ({ question }) => {
  const { comment } = question
  return ( 
    <>
    <Typography variant="h6" >{comment}</Typography>
    </>
   );
}
 
export default FormComment;
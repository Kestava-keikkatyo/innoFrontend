import { Typography } from '@material-ui/core';
import React from 'react'
import { FormComponentProps } from '../../types';

const FormComment: React.FC<FormComponentProps> = ({ question }) => {
  const { comment } = question
  return ( 
    <>
    <Typography variant="h6" >{comment}</Typography>
    </>
   );
}
 
export default FormComment;
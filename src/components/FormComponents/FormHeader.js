import { Typography } from '@material-ui/core';
import React from 'react';

const FormHeader = ({ title, description }) => {
  return ( 
    <>
      <Typography variant="h4">{ title }</Typography>
      <Typography variant="body1">{ description }</Typography>
    </>
   );
}
 
export default FormHeader;
import { Typography } from '@material-ui/core';
import { string } from 'prop-types';
import React from 'react';

interface Props {
  title: string,
  description: string
}

const FormHeader: React.FC<Props> = ({ title, description }) => {
  return ( 
    <>
      <Typography variant="h4">{ title }</Typography>
      <Typography variant="body1">{ description }</Typography>
    </>
   );
}
 
export default FormHeader;
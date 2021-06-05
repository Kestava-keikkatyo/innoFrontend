import { Typography } from '@material-ui/core';
import React from 'react'
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single text component in form between questions.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormComment: React.FC<FormComponentProps> = ({ question }) => {
  const { title } = question
  return (
    <>
    <Typography variant="h6" >{title}</Typography>
    </>
   );
}

export default FormComment;
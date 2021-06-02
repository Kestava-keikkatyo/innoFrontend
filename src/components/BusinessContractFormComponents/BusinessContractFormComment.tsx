import { Typography } from '@material-ui/core';
import React from 'react'
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single text component in business contract form between questions.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormComment: React.FC<FormComponentProps> = ({ question }) => {
  const { comment } = question
  return (
    <>
    <Typography variant="h6" >{comment}</Typography>
    </>
   );
}

export default BusinssContractFormComment;
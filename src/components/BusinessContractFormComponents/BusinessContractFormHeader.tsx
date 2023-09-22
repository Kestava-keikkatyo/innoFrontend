import { Typography } from '@mui/material'
import React from 'react'
import { FormHeaderProps } from '../../types/props'

/**
 * @component
 * @desc Renders header of the form.
 * @param {FormHeaderProps} props
 * @param {string} props.title Title of the form.
 * @param {string} props.description Description of the form.
 */
const BusinssContractFormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='body1'>{description}</Typography>
    </>
  )
}

export default BusinssContractFormHeader

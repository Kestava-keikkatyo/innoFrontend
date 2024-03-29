import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from '@mui/material'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single checkbox group (vertical) question in business contract form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormCheckBoxGroup: React.FC<FormComponentProps> = ({ question }) => {
  const { title, subTitle, options } = question

  let { optionValues } = question

  const [state, setState] = React.useState(
    options.map((name, i) => {
      return { name, value: optionValues[i] }
    }),
  )

  const handleChange = (index: number) => {
    setState(state.map((o, i) => (i === index ? { ...o, value: !o.value } : o)))
    optionValues[index] = !optionValues[index]
  }

  return (
    <>
      <Typography variant='h6'>{title}</Typography>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{title}</FormLabel>
        <FormGroup>
          {state.map((o, i) => (
            <FormControlLabel
              key={o.name}
              control={
                <Checkbox checked={o.value} onChange={() => handleChange(i)} name={o.name} />
              }
              label={o.name}
            />
          ))}
        </FormGroup>
        <FormHelperText>{subTitle}</FormHelperText>
      </FormControl>
    </>
  )
}

export default BusinssContractFormCheckBoxGroup

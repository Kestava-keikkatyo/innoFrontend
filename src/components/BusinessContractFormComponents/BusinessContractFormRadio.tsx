import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, Typography } from '@mui/material';
import React from 'react';
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single radiobutton group (vertical) question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormRadio: React.FC<FormComponentProps> = ({ question }) => {
  const { title, subTitle, options } = question
  let {optionValues} = question
  const [state, setState] = React.useState(
    options.map((name,i) => {
      return { name, value: optionValues[i] }
    })
  )

  const handleChange = (index: number) => {
    setState(state.map((o, i) => i === index ? { ...o, value: true }: { ...o, value: false } ))
    // Change all option values to false
    optionValues.map((_value, i) => {return optionValues[i] = false})
    // update selected option
    optionValues[index] = !optionValues[index]

  }

  return (
    <>
      <Typography variant="h6" >{ title }</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{ title }</FormLabel>
        <FormGroup>
        { state.map((o, i) =>
          <FormControlLabel key={i}
            control={<Radio checked={o.value} onChange={() => handleChange(i)} name={o.name} />}
            label={o.name}
          />
        )}
        </FormGroup>
        <FormHelperText>{ subTitle }</FormHelperText>
      </FormControl>
    </>
   )
}

export default BusinssContractFormRadio;
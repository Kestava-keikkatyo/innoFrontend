import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, Typography } from '@material-ui/core';
import React from 'react';
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single radiobutton group (vertical) question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormRadio: React.FC<FormComponentProps> = ({ question }) => {
  const { title, subTitle, options } = question
  const [state, setState] = React.useState(
    options.map(name => {
      return { name, value: false }
    })
  )

  const handleChange = (index: number) => {
    setState(state.map((o, i) => i === index ? { ...o, value: true }: { ...o, value: false } ))
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
 
export default FormRadio;
import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, Typography } from '@material-ui/core';
import React from 'react';
import { FormComponentProps } from '../../types';

const FormRadio: React.FC<FormComponentProps> = ({ question }) => {
  const { name, subTitle, options } = question
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
      <Typography variant="h6" >{ name }</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{ name }</FormLabel>
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
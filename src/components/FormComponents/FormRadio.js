import { FormControl, FormControlLabel, FormGroup, FormLabel, Radio, Typography } from '@material-ui/core';
import React from 'react';

const FormRadio = () => {
  const [state, setState] = React.useState({
    choclate: true,
    vanilla: false,
    strawberry: false,
  });

  const handleRadioChange = (event) => {
    setState({
      choclate: false,
      vanilla: false,
      strawberry: false, [event.target.name]: event.target.checked });
  }

  const { choclate, vanilla, strawberry } = state;
  
  return ( 
    <>
      <Typography variant="h6" >5. Whats your favourite ice cream.</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">5. Which of these ice creams do you like.</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Radio checked={choclate} onChange={handleRadioChange} name="choclate" />}
            label="Choclate"
          />
          <FormControlLabel
            control={<Radio checked={vanilla} onChange={handleRadioChange} name="vanilla" />}
            label="Vanilla"
          />
          <FormControlLabel
            control={<Radio checked={strawberry} onChange={handleRadioChange} name="strawberry" />}
            label="Strawberry"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </>
   )
}
 
export default FormRadio;
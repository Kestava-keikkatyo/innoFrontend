import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@material-ui/core'
import React from 'react'

const FormCheckBoxGroup = () => {
  const [state, setState] = React.useState({
    choclate: true,
    vanilla: false,
    strawberry: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { choclate, vanilla, strawberry } = state;
  const error = [choclate, vanilla, strawberry].filter((v) => v).length !== 2;
  
  return ( 
    <>
      <Typography variant="h6" >4. Whats your favourite ice cream.</Typography>
        <FormControl component="fieldset" required error={error}>
        <FormLabel component="legend">4. Which of these ice creams do you like.</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={choclate} onChange={handleChange} name="choclate" />}
            label="Choclate"
          />
          <FormControlLabel
            control={<Checkbox checked={vanilla} onChange={handleChange} name="vanilla" />}
            label="Vanilla"
          />
          <FormControlLabel
            control={<Checkbox checked={strawberry} onChange={handleChange} name="strawberry" />}
            label="Strawberry"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </>
   )
}
 
export default FormCheckBoxGroup
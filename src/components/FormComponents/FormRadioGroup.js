import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';

const FormRadioGroup = () => {
  const [state, setState] = React.useState(0);

  const handleRadioChange = (event) => {
    console.log(state);
    setState(event.target.value);
  }
  
  return ( 
    <Grid container   alignItems="flex-start">
      <Grid item xs={3}>
        <Typography variant="h6" >6. How ya feelin mon.</Typography>
      </Grid>
      <Grid item xs={9}>
      <FormControl component="fieldset" fullWidth>
          <RadioGroup
            row
            // aria-label="gender"
            // name="gender1"
            value={state}
            onChange={handleRadioChange}
          >
            { Array(4).fill().map((_, i) => (
              <FormControlLabel
                key={i}
                labelPlacement="top"
                value={i}
                control={<Radio />}
                label={i}
              />
            )) }
        </RadioGroup>
      </FormControl>
      </Grid>
      </Grid>
   )
}
 
export default FormRadioGroup
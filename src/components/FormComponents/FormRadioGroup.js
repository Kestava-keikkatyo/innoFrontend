import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';

const FormRadioGroup = ({ question }) => {
  const { name, scale } = question
  const [state, setState] = React.useState(0)

  const handleChange = ({ target }) => {
    setState(parseInt(target.value))
  }
  
  return ( 
    <Grid container alignItems="flex-start">
      <Grid item xs={3}>
        <Typography variant="h6" >{ name }</Typography>
      </Grid>
      <Grid item xs={9}>
        <FormControl component="fieldset" fullWidth>
            <RadioGroup
              row
              aria-label="scale"
              name="scale"
              value={state}
              onChange={handleChange}
            >
              { Array(parseInt(scale)).fill().map((_, i) => (
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
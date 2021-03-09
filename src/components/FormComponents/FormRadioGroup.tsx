import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { FormComponentProps } from '../../types';

const FormRadioGroup: React.FC<FormComponentProps> = ({ question }) => {
  const { name, scale } = question
  const [state, setState] = React.useState(0)

  const handleChange = ({ target }: any) => {
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
              {/**
               * @todo type checking for scale
               */
              Array(scale).fill(0).map((_, i) => (
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
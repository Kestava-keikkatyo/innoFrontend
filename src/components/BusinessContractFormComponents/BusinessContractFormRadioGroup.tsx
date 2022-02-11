import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single radiobutton group (horizontal) question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinssContractFormRadioGroup: React.FC<FormComponentProps> = ({ question }) => {
  const { title, scale } = question
  const [state, setState] = React.useState(0)

  const handleChange = ({ target }: any) => {
    setState(parseInt(target.value))
  }

  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={3}>
        <Typography variant="h6" >{ title }</Typography>
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

export default BusinssContractFormRadioGroup
import { Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types';

const FormCheckBox: React.FC<FormComponentProps> = ({ question }) => {
  const { name } = question
  const [state, setState] = React.useState(false)

  const handleChange = () => {
    setState(!state)
  }
  
  return ( 
    <>
      <Typography variant="h6" >Check the box if true.</Typography>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={state} onChange={handleChange} />}
            label={ name }
          />
        </FormControl>
    </>
   )
}
 
export default FormCheckBox
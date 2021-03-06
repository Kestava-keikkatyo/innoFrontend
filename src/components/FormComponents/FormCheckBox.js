import { Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'

const FormCheckBox = () => {
  const [state, setState] = React.useState({
    choclate: true,
    vanilla: false,
    strawberry: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  return ( 
    <>
      <Typography variant="h6" >3. Check the box if true.</Typography>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={state.vanilla} onChange={handleChange} name="vanilla" />}
            label="I am sane."
          />
        </FormControl>
    </>
   )
}
 
export default FormCheckBox
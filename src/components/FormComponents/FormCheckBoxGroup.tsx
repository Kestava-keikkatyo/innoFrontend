import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props'

/**
 * @component
 * @desc Renders a single checkbox group (vertical) question in form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const FormCheckBoxGroup: React.FC<FormComponentProps> = ({ question }) => {
  const { name, subTitle, options } = question
  const [state, setState] = React.useState(
    options.map(name => {
      return { name, value: false }
    })
  )

  const handleChange = (index: number) => {
    setState(state.map((o, i) => i === index ? { ...o, value: !o.value }: o ))
  };

  return ( 
    <>
      <Typography variant="h6" >{ name }</Typography>
        <FormControl component="fieldset" >
        <FormLabel component="legend">{ name }</FormLabel>
        <FormGroup>
          { state.map((o, i) =>
            <FormControlLabel key={o.name}
              control={<Checkbox checked={o.value} onChange={() => handleChange(i)} name={o.name} />}
              label={o.name}
            />
          )}
        </FormGroup>
        <FormHelperText>{ subTitle }</FormHelperText>
      </FormControl>
    </>
   )
}
 
export default FormCheckBoxGroup
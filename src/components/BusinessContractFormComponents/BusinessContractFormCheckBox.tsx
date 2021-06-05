import { Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'
import { FormComponentProps } from '../../types/props';

/**
 * @component
 * @desc Renders a single checkbox question in business contract form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinessContractFormCheckBox: React.FC<FormComponentProps> = ({ question }) => {
  const { title } = question
  const [state, setState] = React.useState(false)

  question.checked = state

  const handleChange = () => {
    setState(!state)

  }

  return (
    <>
      <Typography variant="h6" >Check the box if true.</Typography>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={state} onChange={handleChange} />}
            label={ title }
          />
        </FormControl>
    </>
   )
}

export default BusinessContractFormCheckBox
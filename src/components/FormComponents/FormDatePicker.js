import {
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core"
import React from "react"

const FormDatePicker = ({ question }) => {
  const { name } = question
  return (
    <>
      <Typography variant="h6">Date: </Typography>
      <FormControl>
        <FormControlLabel
          control={<TextField type="date"></TextField>}
          label={name}
        ></FormControlLabel>
      </FormControl>
    </>
  )
}

export default FormDatePicker

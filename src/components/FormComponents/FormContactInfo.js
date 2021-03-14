import {
  FormControl,
  FormControlLabel,
  Input,
  Typography,
} from "@material-ui/core"
import React from "react"
import CustomFormInput from "../../pages/FormsPage/CustomFormInput"

/**
 * CustomFormInput cant be used as control?
 * @param {} param0
 * @returns
 */
const FormContactInfo = ({ question }) => {
  const { name } = question
  return (
    <>
      <Typography variant="h6">Contact: </Typography>
      <FormControl>
        <FormControlLabel
          control={<Input />}
          placeholder="Name: "
          label={name}
        ></FormControlLabel>
        <FormControlLabel
          control={<Input />}
          placeholder="Phone: "
          label={name}
        ></FormControlLabel>
        <FormControlLabel
          control={<Input />}
          placeholder="Email: "
          label={name}
        ></FormControlLabel>
      </FormControl>
    </>
  )
}

export default FormContactInfo
import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import React from 'react'

export interface ReportStepOneProps {}

const ReportStepOne: React.FC<ReportStepOneProps> = () => {
  return (
    <>
      <Typography>Select who you want to handle your report.</Typography>
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          Name of Agency / Business
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
        >
          <MenuItem value={10}>Työnantaja 1</MenuItem>
          <MenuItem value={20}>Työnantaja 2</MenuItem>
          <MenuItem value={30}>Työnantaja 3</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default ReportStepOne

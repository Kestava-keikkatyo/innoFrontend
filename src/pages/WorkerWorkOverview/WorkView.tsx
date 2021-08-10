import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import WorkHistory from "./WorkHistory";
import ActiveWorkTask from "./ActiveWorkTask";
const WorkView: React.FC = () => {
  const [value, setValue] = React.useState('active');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  
  return (
    <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Valitse </FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="active" control={<Radio />} label="Aktiiviset" />
        <FormControlLabel value="history" control={<Radio />} label="Historia" />
      </RadioGroup>
    </FormControl>
  {value==='active' ? <ActiveWorkTask/> : <WorkHistory/>}
  </div>
  )
  }


export default WorkView;
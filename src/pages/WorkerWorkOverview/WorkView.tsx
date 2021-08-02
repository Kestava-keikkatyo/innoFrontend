import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useState } from "react";
import WorkHistory from "./WorkHistory";
import ActiveWorkTask from "./ActiveWorkTask";
const WorkView: React.FC = () => {
  const [value, setValue] = React.useState('active');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const [category,setCategory] = useState('active')
  const classes = useStyles();
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

const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
  },
}));

export default WorkView;
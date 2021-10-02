import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { useTranslation } from "react-i18next";

const WorkView: React.FC<any> = ({ works }) => {
  const [value, setValue] = React.useState("active");
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Valitse </FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="active"
            control={<Radio />}
            label={t("active")}
          />
          <FormControlLabel
            value="done"
            control={<Radio />}
            label={t("history")}
          />
        </RadioGroup>
      </FormControl>
      <Typography className={classes.headline} variant="h6" gutterBottom>
        {t(value === "done" ? "history" : "active")}
      </Typography>
      {works
        .filter((work: any) => work.status === value)
        .map((filteredWork: any) => (
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{filteredWork.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {filteredWork.startdate} - {filteredWork.enddate}
                {/*TODO: date-fns format duration of enddate --> time left*/}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>{filteredWork.contact}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  headline: {
    textAlign: "center",
  },
}));

export default WorkView;

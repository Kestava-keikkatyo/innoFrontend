import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

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
            label={t<string>("active")}
          />
          <FormControlLabel
            value="done"
            control={<Radio />}
            label={t<string>("history")}
          />
        </RadioGroup>
      </FormControl>
      <Typography className={classes.headline} gutterBottom>
        {t(value === "done" ? "history" : "active")}
      </Typography>
      {works
        .filter((work: any) => work.status === value)
        .map((filteredWork: any) => (
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
               <Typography className={classes.accTitle}>{filteredWork.company_name} - {filteredWork.title} :</Typography>
              <Typography >{filteredWork.startdate} - {filteredWork.enddate}</Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography> {t('contacts')}: {filteredWork.contact}</Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Button
              variant="outlined"
              color="primary"
              >{t('contract')}</Button>
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
  accordion: {
    marginTop: '2%'
  },
  accTitle: {
    fontWeight: 'bold',
    marginRight: '1%'
  },
}));
export default WorkView;

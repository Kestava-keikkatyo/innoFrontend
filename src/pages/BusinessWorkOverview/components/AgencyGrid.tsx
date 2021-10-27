import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Radio } from '@material-ui/core';
import { useTranslation } from 'react-i18next'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
}));

//const AgencyGrid = (prop: { workContracts: Array<Object>, setSelectedAgency:Function }) => {
const AgencyGrid = (prop: { workContracts: any, setSelectedAgency:Function, searchInput: String }) => {
    const { workContracts, setSelectedAgency, searchInput } = prop
  const classes = useStyles();
  const { t } = useTranslation()
  
  const handleSelect = (event:any, agencyId:string, contractId:string) => {
    event.stopPropagation()
    setSelectedAgency({ agencyId: agencyId, contractId: contractId})
  }
  if (!workContracts) {
    return <Typography>No result</Typography>
  } else {

    return (
      <div className={classes.root}>
        {workContracts.filter((wc:any) => wc.agency.name.toLowerCase().includes(searchInput.toLowerCase())).map((object: any) => {
          // TODO: once database has description add it here
          return (
          <Accordion key={object.agency._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => handleSelect(event,object.agency._id,object._id)}
                onFocus={(event) => event.stopPropagation()}
                control={<Radio/>}
                label={object.agency.name}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
              {t("agency_description_here")}
              </Typography>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    );
  }
}

export default AgencyGrid
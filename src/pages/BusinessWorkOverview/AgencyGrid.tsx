import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
});

const AgencyGrid = (prop: { agencies: Array<Object> }) => {
  const { agencies } = prop
  const classes = useStyles();

  if (!agencies) {
    return <Typography>No result</Typography>
  } else {
    return (
      <div className={classes.root}>
        {agencies.map((object: any) => (
          <Accordion key={object.agency._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={object.agency.name}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The click event of the nested action will propagate up and expand the accordion unless
                you explicitly stop it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }
}

export default AgencyGrid
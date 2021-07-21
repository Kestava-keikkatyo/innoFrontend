import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ApplyingWorkers = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Front end koodaaja </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography >
              Haussa Front end koodaaja kesäksi
            </Typography>
            <Divider />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ApplyingWorkers;

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

export const EndedContracts = () => {
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
          <Typography>  Java-koodaaja </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography >
              Jani jani.worker@test.com 044000000
            </Typography>
            <Divider />
            <Typography >
              Päättynyt 15.3.2021
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EndedContracts;
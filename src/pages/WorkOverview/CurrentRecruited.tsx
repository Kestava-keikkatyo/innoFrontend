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

export const CurrentRecruited = () => {
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
          <Typography> Back end koodaaja </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography >
              Markku  Markku.worker@test.com 055000000
            </Typography>
            <Divider />
            <Typography >
              Aloittanut 1.1.2021
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CurrentRecruited;
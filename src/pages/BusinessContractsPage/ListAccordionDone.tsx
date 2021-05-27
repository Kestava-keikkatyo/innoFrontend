import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Container,
  makeStyles,
  Theme,
  Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  column: {
    flexBasis: "33.33%",
  },
  color: {
    color: "green",
  },
  display: {
    display: "column",
    width: "30em"
  }
}));

export const ListAccordionDone = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.column}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Accordion 1</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.color}>Valmis</Typography>
          </div>
          <div className={classes.column}>
            <Button>Siirry yrityksen nettisivuille</Button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.display}>
            <Typography>
              Puh: 0505555555
            </Typography>
            <Typography>
              Email: ohra@luukku.com
            </Typography>
            <Divider/>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </div>
        </AccordionDetails>
        <AccordionActions>
          <Button>Hylkää sopimus</Button>
          <Button>Esikatsele lomaketta</Button>
          <Button>Tulosta pdf</Button>
          <Button>Lataa ja lähetä allekirjoitettu sopimus</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )}
export default ListAccordionDone;

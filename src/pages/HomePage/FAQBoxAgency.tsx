import React from "react"
import { useTranslation } from "react-i18next"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import faq from "../../assets/tietopankki/faq.json"

import {
  TableCell,
  Typography,
  withStyles,
  Theme,
  createStyles,
  makeStyles,
  Grid,
  List,
  ListItem,
  Button,
} from "@material-ui/core"

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core"

/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
export default function CustomizedTables() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState(true)
  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: "#eb5a02",
      },
    })
  )(TableCell)
  return (
    <div>
      <Grid item xs={12} className={classes.grid}>
        <List component="nav" aria-label="mailbox folders">
          {/*
          Tulostaa FAQ-JSONin Accordion-listana
       */}
          {faq.agency.map((e, i) => (
            <ListItem key={e.id}>
              <Accordion className={classes.card} variant="outlined">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.text} gutterBottom>
                    {`${e.tip}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className={classes.text}
                    variant="subtitle1"
                  >{`${e.details}`}</Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  accordionDetails: {
    width: "100%",
  },
  accordionSummary: {
    width: "100%",
  },
  card: {
    margin: theme.spacing(0.5, 0),
    width: "100%",
  },
  accordion: {
    width: "100%",
    border: "1px solid #E0E0E0",
  },
  list: {
    margin: "5%",
  },
  grid: {
    overflowY: "scroll",
    height: "60vh",
  },
  text: {
    color: "#000000DE",
  },
}))

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
  Card,
  CardContent,
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
const FAQComponentWorker = () => {
  const classes = useStyles()
  const { t } = useTranslation()

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
    <Grid>
      <Card>
        <CardContent>
          <List component="nav" aria-label="mailbox folders">
            {/*
          Tulostaa FAQ-JSONin Accordion-listana
       */}
            {faq.worker.map((e, i) => (
              <ListItem>
                <Accordion className={classes.card} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={classes.text}
                    >{`${e.tip}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{`${e.details}`}</AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0.5, 0),
  },
  accordion: {
    width: "100%",
    marginTop: 12,
    border: "1px solid #E0E0E0",
    borderRadius: 5,
  },
  list: {
    margin: "5%",
  },
  text: {
    color: "#000000DE",
  },
}))

export default FAQComponentWorker

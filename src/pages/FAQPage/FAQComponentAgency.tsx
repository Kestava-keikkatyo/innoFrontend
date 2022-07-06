import React from 'react'
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import vastuualueet from '../../assets/tietopankki/vastuualueet.json'
import faq from '../../assets/tietopankki/faq.json'

import {
  TableCell,
  Theme,
  Grid,
  List,
  Card,
  CardContent,
  Accordion,
  AccordionDetails,
  ListItem,
  Typography,
} from '@mui/material';

import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { AccordionSummary } from '@mui/material'

/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
const FAQComponentAgency = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: '#eb5a02',
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
            {faq.agency.map((e, i) => (
              <ListItem>
                <Accordion className={classes.card} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h5">
                      {`${e.tip}`}
                    </Typography>
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
    margin: theme.spacing(2, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  list: {
    margin: '5%',
  },
}))

export default FAQComponentAgency

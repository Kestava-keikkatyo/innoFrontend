import React from 'react';
import { useTranslation } from 'react-i18next'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import faq from '../../assets/tietopankki/faq.json';

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
} from '@material-ui/core';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';


/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
export default function CustomizedTables() {
  const classes = useStyles();
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState(true);
  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: '#eb5a02',
      },
    })
  )(TableCell);

  if(!expanded){
    return (
    <div style={{ marginTop: 16 }}>
      <Grid item xs={12}>
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
      <Button onClick={()=>setExpanded(true)}>{t('show_less')}</Button>
      </Grid>
    </div>
    );
  }
  return (
    <div style={{ marginTop: 16 }}>
      <Grid item xs={12}>
      <List component="nav" aria-label="mailbox folders">
        {/*
          Tulostaa FAQ-JSONin Accordion-listana
       */}
        {faq.agency.slice(0,4).map((e, i) => (
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
      <Button onClick={()=>setExpanded(false)}>{t('show_more')}</Button>
      </Grid>
    </div>
  );
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
  list:{
    margin: '5%'
  }
}));

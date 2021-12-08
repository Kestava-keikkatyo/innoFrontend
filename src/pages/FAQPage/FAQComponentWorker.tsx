import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import faq from '../../assets/tietopankki/faq.json';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  withStyles,
  ListItemText,
  Theme,
  createStyles,
  makeStyles,
  Grid,
  List,
  ListItem,
  Divider,
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

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: '#eb5a02',
      },
    })
  )(TableCell);

  // Table view for desktop devices
  const tableView = () => {
    return (
      <List component="nav" aria-label="mailbox folders">
        <Divider />
        <ListItem>

 {/*  Alkuperäinen

       {vastuualueet.agency.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))} */}

              {/*  Testi I : FAQ:n tuonti JSONista*/}

              {faq.worker.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
        </ListItem>
      </List>
    );
  };

  //Alkuperäinen
 /* return (
    <div style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Accordion className={classes.card} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <Typography gutterBottom variant="h5">
              {t('feedback_category')}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{tableView()}</AccordionDetails>
  </Accordion>

      </Grid>
    </div>
  );*/

  // TESTI II : Accordion-lista, FAQ-JSON kysymyksillä?
  return (
    <div style={{ marginTop: 16 }}>
      <Grid item xs={12}>
      <List component="nav" aria-label="mailbox folders">
        <Divider />
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
       
           
           <Typography gutterBottom variant="h5"> 
           {`${e.tip}`} 
           </Typography>
                    
          </AccordionSummary>
    
         
         <AccordionDetails>{`${e.details}`}</AccordionDetails>
        </Accordion>
         </ListItem>
         ))} 
      </List>
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

import React from 'react';

import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import faq from '../../assets/tietopankki/faq.json';
import {
  Card,
  List,
  CardContent,
  FormControlLabel,
  Checkbox,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import { useSelector } from 'react-redux';
import Faq from './FAQBoxAgency';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const AgencyHome = () => {
  const { t } = useTranslation();

  return (
    <Grid container className="homeContainer">
      <Grid item xs={12} md={6} className="home">
        <Card variant="outlined">
          <CardHeader
            title={t("faq")}
            subheader=""
            style={{ textAlign: "center", paddingBottom: "0"}}
          />
          <CardContent className="home2">
          <Faq />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} className="home">
        <Card variant="outlined">
          <CardHeader
            title={t('agency_responsibility')}
            subheader=""
            style={{ textAlign: "center", paddingBottom: "0"}}
          />
          <CardContent className="home2">
            {/* Old agency responsibilities list
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.agency.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
              </List> */}
              {/* Agency responsibilities list
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              <Typography variant="h6" component="h2">
                Jaetut vastuut
              </Typography>
              <Divider />
              {/* Yhtenäiset vastuut lista *}
              {vastuualueet.yhtenäinen.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
              <Typography variant="h6" component="h2">
                {t('agency_responsibility')}
              </Typography>
              <Divider />
              {/* Agency responsibilities list *}
              {vastuualueet.agency2.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
              </List> */}
            <List component="nav" aria-label="mailbox folders">
              {vastuualueet.agency.map((e, i) => (
              <ListItem key={e.tip}>
                <Accordion style={{margin: "4px 0"}} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{color: "#000000DE"}}>{`${e.tip}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{`${e.details}`}</Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              ))}
            </List>
            <FormControlLabel 
            control={<Checkbox defaultChecked style={{color:'#eb5a00'}} />} 
            label={t<string>('agency_responsibilities_read')}
            style={{padding: "0 1rem"}}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};



export default AgencyHome;

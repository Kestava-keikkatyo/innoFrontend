import React from 'react';
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  Card,
  List,
  CardContent,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
  Divider,
  CardHeader,
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Faq from './FAQBoxBusiness';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const BusinessHome = () => {
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
            title={t('business_responsibility')}
            subheader=""
            style={{ textAlign: "center", paddingBottom: "0"}}
          />
          <CardContent className="home2">
            {/* Old business responsibilities list
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.business.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List> */}
            {/* Business2 responsibilities list
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              <Typography variant="h6" component="h2">
                Jaetut vastuut
              </Typography>
              <Divider />
              {/* Shared responsibilities list *}
              {vastuualueet.yhtenäinen.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
              <Typography variant="h6" component="h2">
                {t('business_responsibility')}
              </Typography>
              <Divider />
              {/* Business responsibilities list *}
              {vastuualueet.business2.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
            </List> */}
            <List component="nav" aria-label="mailbox folders">
              {vastuualueet.business.map((e, i) => (
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
            label={t<string>('business_responsibilities_read')}
            style={{padding: "0 1rem"}}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BusinessHome;

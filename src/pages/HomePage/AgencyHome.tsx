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
} from '@mui/material';
import { useSelector } from 'react-redux';
import Faq from './FAQBoxAgency';
import { useTranslation } from 'react-i18next';

const AgencyHome = () => {
  const { t } = useTranslation();

  return (
    <Grid container className="homeContainer">
      <Grid item xs={12} md={6} className="home">
      <Card variant="outlined">
          <CardHeader
            title={t("faq")}
            subheader=""
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
          />
          <CardContent style={{paddingBottom: "0"}}>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.agency.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List>
            <FormControlLabel control={<Checkbox defaultChecked style={{color:'#eb5a00'}} />} label={t<string>('agency_responsibilities_read')}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};



export default AgencyHome;

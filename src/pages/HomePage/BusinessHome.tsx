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
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Faq from './FAQBoxBusiness';

const BusinessHome = () => {
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
            title={t('business_responsibility')}
            subheader=""
          />
          <CardContent className="home3">
            {/* Old business responsibilities list
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.business.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List> */}
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              <Typography variant="h6" component="h2">
                Jaetut vastuut
              </Typography>
              <Divider />
              {/* Yhtenäiset vastuut lista */}
              {vastuualueet.yhtenäinen.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
              <Typography variant="h6" component="h2">
                {t('business_responsibility')}
              </Typography>
              <Divider />
              {/* Business responsibilities list */}
              {vastuualueet.business2.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
            </List>
            <FormControlLabel control={<Checkbox defaultChecked style={{color:'#eb5a00'}} />} label={t<string>('business_responsibilities_read')}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BusinessHome;

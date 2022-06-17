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
          <CardContent className="homeB">
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
          <CardContent style={{paddingBottom: "0"}}>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.business.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
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

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
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Faq from './FAQComponentBusiness';
//import FeedBackForm from './FeedBackForm/index';
import { useTranslation } from 'react-i18next';

const FAQBusiness = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
    <Grid item xs={12} md={10} style={{ marginTop: '1%' }}>
      <Card variant="outlined">
          <CardHeader
            title="FAQ"
            subheader=""
          />
          <CardContent>
{/*          <List component="nav" aria-label="mailbox folders">
              <Divider />
              {faq.agency.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip} `} />
                  <br/>
                  <ListItemText secondary={` - ${e.details}`} />
                </ListItem>
              ))}
            </List>
            <CardHeader
            action={
              <Button variant="outlined" color="primary">
                {t('read_more')}
              </Button> 
            }
          /> */}
          <Faq />

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};



export default FAQBusiness;

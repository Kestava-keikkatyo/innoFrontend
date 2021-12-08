import React from 'react';
import {
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';
import Faq from './FAQComponentWorker';
import { useTranslation } from 'react-i18next';

const FAQWorker = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
    <Grid item xs={12} md={10} style={{ marginTop: '1%' }}>
      <Card variant="outlined">
          <CardContent>
          <Faq />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};



export default FAQWorker;

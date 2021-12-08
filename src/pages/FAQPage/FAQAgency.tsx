import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@material-ui/core';
import Faq from './FAQComponentAgency';
import { useTranslation } from 'react-i18next';

const FAQAgency = () => {
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
          <Faq />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};



export default FAQAgency;

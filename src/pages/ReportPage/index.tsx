import React from 'react';

import { Button, Container, Typography } from '@mui/material';
import ReportForm from '../ReportPage/ReportForm';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'

const ReportPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" color="primary">
        {t('report')}
      </Typography>
      <Button 
        variant='outlined' 
        onClick={() => history.push('/reports')}
        sx={{
          color: 'primary',
          marginTop: '1em'
        }}
      >
        {t('back')}
      </Button>
      <ReportForm />
    </Container>
  );
};

export default ReportPage;

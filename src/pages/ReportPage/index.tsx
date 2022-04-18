import React from 'react';

import { Container, Typography } from '@mui/material';
import ReportForm from '../ReportPage/ReportForm';
import { useTranslation } from 'react-i18next';

const ReportPage = () => {
  const { t } = useTranslation()
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" color="primary">
        {t('report')}
      </Typography>
      <ReportForm />
    </Container>
  );
};

export default ReportPage;

import React from 'react';

import { Container, Typography } from '@mui/material';
import ReportForm from '../ReportPage/ReportForm';

const ReportPage = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" color="primary">
        Report
      </Typography>
      <ReportForm />
    </Container>
  );
};

export default ReportPage;

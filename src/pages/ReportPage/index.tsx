import React from 'react';

import { Button, Container, Typography } from '@mui/material';
import ReportForm from '../ReportPage/ReportForm';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { setReport } from '../../actions/reportActions';
import { initialReport } from '../../reducers/reportReducer';
import { useDispatch } from 'react-redux';
import { setFiles } from '../../actions/fileActions';

const ReportPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleBack = () => {
    dispatch(setReport(initialReport));
    dispatch(setFiles([null, null, null]))
    history.push('/reports')
  }
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" color="primary">
        {t('report')}
      </Typography>
      <Button 
        variant='outlined' 
        onClick={handleBack}
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

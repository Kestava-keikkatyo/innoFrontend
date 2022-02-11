import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUploader from '../../components/FileUploader';
import { setReport } from '../../actions/reportActions';
import { useTranslation } from 'react-i18next'
/**
 *
 * @disc Report step three
 */
const ReportStepThree: React.FC<any> = () => {
  const { currentReport } = useSelector((state: any) => state.report);
  const { t } = useTranslation()
  const dispatch = useDispatch();

  const handleWorkTitle = (event: any) => {
    dispatch(setReport({ ...currentReport, workTitle: event.target.value }));
  };

  const handleReportTitle = (event: any) => {
    dispatch(setReport({ ...currentReport, reportTitle: event.target.value }));
  };

  const handleDetails = (event: any) => {
    dispatch(setReport({ ...currentReport, details: event.target.value }));
  };

  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h6">{t('fill_details')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('fill_work_title')}
          onChange={handleWorkTitle}
          style={{ marginTop: 8 }}
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: 16 }}>
        <TextField label={t('fill_report_title')} onChange={handleReportTitle} />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ marginTop: 24, fontWeight: 500 }}>
        {t('fill_report_details')}
        </Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          onChange={handleDetails}
          style={{ marginTop: 8 }}
        />
        <FileUploader name={t('upload_file')} accept="image/*, video/*" />
      </Grid>
    </Grid>
  );
};

export default ReportStepThree;

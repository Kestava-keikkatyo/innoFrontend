import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUploader from '../../components/FileUploader';
import { setReport } from '../../actions/reportActions';

/**
 *
 * @disc Report step three
 */
const ReportStepThree: React.FC<any> = () => {
  const { currentReport } = useSelector((state: any) => state.report);

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
        <Typography variant="h6">Fill in details</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Current work title"
          onChange={handleWorkTitle}
          style={{ marginTop: 8 }}
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: 16 }}>
        <TextField label="Report Title" onChange={handleReportTitle} />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ marginTop: 24, fontWeight: 500 }}>
          Report Details
        </Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          onChange={handleDetails}
          style={{ marginTop: 8 }}
        />
        <FileUploader name="Upload file" accept="image/*, video/*" />
      </Grid>
    </Grid>
  );
};

export default ReportStepThree;

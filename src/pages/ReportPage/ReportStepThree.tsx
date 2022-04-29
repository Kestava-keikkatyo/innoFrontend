import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUploader from '../../components/FileUploader';
import { setReport } from '../../actions/reportActions';
import { useTranslation } from 'react-i18next'
/**
 *
 * @disc Report step three
 */
const ReportStepThree: React.FC<any> = ({stepThreeError}) => {
  const { currentReport } = useSelector((state: any) => state.report);
  const [title, setTitle] = useState(currentReport.title)
  const [details, setDetails] = useState(currentReport.details)
  const { t } = useTranslation()
  const dispatch = useDispatch();

  const handleTitle = (event: any) => {
    setTitle(event.target.value)
    dispatch(setReport({ ...currentReport, title: event.target.value }));
  };

  const handleDetails = (event: any) => {
    setDetails(event.target.value)
    dispatch(setReport({ ...currentReport, details: event.target.value }));
  };

  /**If stepThreeError status is true and title is empty, set error props
   * to title Textfield. Error status is set in ReportForm if user tries 
   * to submit report without title or details.*/
  const titleErrorProps = (stepThreeError && title === "") 
  ? { error: true, helperText: t('report_title_required') }
  : { error: false, helperText: "" }

  /**If stepThreeError status is true and details is empty, set error props
   * to details Textfield. Error status is set in ReportForm if user tries 
   * to submit report without title or details.*/
  const detailsErrorProps = (stepThreeError && details === "") 
  ? { error: true, helperText: t('report_details_required') }
  : { error: false, helperText: "" }

  return (
    <Grid container style={{ marginTop: 16 }}>
      {/**Title */}
      <Grid item xs={12}>
        <Typography variant="h6">{t('fill_details')}</Typography>
      </Grid>

      {/**Report title Textfield */}
      <Grid item xs={12} style={{ marginTop: 16 }}>
        <TextField 
          label={t('fill_report_title')} 
          value={title}
          onChange={handleTitle} 
          /**If error state is set true and title is empty, 
            show Textfield in error state and show helper text.*/
          {...titleErrorProps}
        />
      </Grid>

      {/**Report details Textfield */}
      <Grid item xs={12}>
        <TextField
          label={t('fill_report_details')} 
          multiline
          rows={4}
          variant="outlined"
          value={details}
          onChange={handleDetails}
          style={{ marginTop: 8 }}
          /**If error state is set true and details is empty, 
            show Textfield in error state and show helper text.*/
          {...detailsErrorProps}
        />

        {/**File uploader for uploading images or video to report */}
        <FileUploader name={t('upload_file')} accept="image/*, video/*" />
      </Grid>
    </Grid>
  );
};

export default ReportStepThree;

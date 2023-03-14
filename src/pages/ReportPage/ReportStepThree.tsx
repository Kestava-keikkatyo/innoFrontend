import { Grid, TextField, Typography, FormControl, Select, MenuItem, InputLabel} from '@mui/material';
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
  const [title2, setTitle2] = useState(currentReport.title2)
  const [details, setDetails] = useState(currentReport.details)
  const [details2, setDetails2] = useState(currentReport.details2)
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(currentReport.type ? currentReport.type : "")

  const handleTitle = (event: any) => {
    setTitle(event.target.value)
    dispatch(setReport({ ...currentReport, title: event.target.value }));
  };
  const handleTitle2 = (event: any) => {
    setTitle2(event.target.value)
    dispatch(setReport({ ...currentReport, title2: event.target.value }));
  };

  const handleDetails = (event: any) => {
    setDetails(event.target.value)
    dispatch(setReport({ ...currentReport, details: event.target.value }));
  };
  const handleDetails2 = (event: any) => {
    setDetails2(event.target.value)
    dispatch(setReport({ ...currentReport, details2: event.target.value }));
  };

  const handleSelectedType = (event: any) => {
    setSelectedType(event.target.value)
    /**Mui Select does not accept null for empty value. So we need 
     * to use "" but send null to store when clearing selection. 
     * */
    console.log(event.target.value)

    const valueForDB = event.target.value === "" ? null : event.target.value 
    dispatch(
      setReport({ ...currentReport, type: valueForDB })
    );
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
        <Typography variant="h2" className='header5'>{t('fill_details')}</Typography>
      </Grid>

      
      {/**Report title Textfield */}
      <Grid item xs={12} style={{ marginTop: 16 }}>
        <TextField 
          label={t('report_worker_title')} 
          value={title}
          onChange={handleTitle} 
          /**If error state is set true and title is empty, 
            show Textfield in error state and show helper text.*/
          {...titleErrorProps}
        />
      </Grid>
    {/**Report title Textfield */}
    <Grid item xs={12} style={{ marginTop: 16 }}>
        <TextField 
          label={t('fill_report_title')} 
          value={title2}
          onChange={handleTitle2} 
          /**If error state is set true and title is empty, 
            show Textfield in error state and show helper text.*/
          {...titleErrorProps}
          style={{ marginBottom: '1em' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" className='header5'>{t('select_report_handler_report_title')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          style={{ marginBottom: '1em' }}
        >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedType}
              style={{ maxHeight: 50 }}
              onChange={handleSelectedType}
            >
              {/**Menuitem for clearing selection */}
            <MenuItem value="">
              <em>{t('select_report_handler_clear')}</em>
            </MenuItem>
            <MenuItem value="positive">
              {t('select_report_handler_report_positive')}
            </MenuItem>
            <MenuItem value="deficiency">
              {t('select_report_handler_report_deficiency')}
            </MenuItem>
            <MenuItem value="inappropriate">
              {t('select_report_handler_report_inappropriate')}
            </MenuItem>
            <MenuItem value="closecall">
              {t('select_report_handler_report_closecall')}
            </MenuItem>
            <MenuItem value="incident">
              {t('select_report_handler_report_incident')}
            </MenuItem>
            <MenuItem value="else">
              {t('select_report_handler_report_else')}
            </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      {/**Title */}
      <Grid item xs={12}>
        <Typography variant="h2" className='header5'>{t('fill_report_details')}</Typography>
      </Grid>

      {/**Report details Textfield */}
      <Grid item xs={12}>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          value={details}
          onChange={handleDetails}
          style={{ marginBottom: '1em' }}
          /**If error state is set true and details is empty, 
            show Textfield in error state and show helper text.*/
          {...detailsErrorProps}
        />
      </Grid>

      {/**Title */}
      <Grid item xs={12}>
        <Typography variant="h2" className='header5'>{t('report_suggestions')}</Typography>
      </Grid>
      {/**Report details Textfield */}
      <Grid item xs={12}>
        <TextField
          label={t('report_suggestions_description')} 
          multiline
          rows={4}
          variant="outlined"
          value={details2}
          onChange={handleDetails2}
          /**If error state is set true and details is empty, 
            show Textfield in error state and show helper text.*/
          {...detailsErrorProps}
        />
      </Grid>
    </Grid>
  );
};

export default ReportStepThree;

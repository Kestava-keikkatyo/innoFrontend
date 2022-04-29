import 'date-fns';
import React from 'react';
import Grid from '@mui/material/Grid';
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setReport } from '../../actions/reportActions';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'

/**Second step (page) of the new report form. */
const ReportStepTwo = () => {
  const { currentReport } = useSelector((state: any) => state.report);
  /**If current report is missing a date, select current date. */
  const [selectedDate, setSelectedDate] = React.useState(currentReport.date === "" ? new Date() : currentReport.date);
  const dispatch = useDispatch();
  const { t } = useTranslation()

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    dispatch(setReport({ ...currentReport, date: date })); 
  };

  useEffect(() => {
    if (currentReport.date === "") {
      dispatch(setReport({ ...currentReport, date: selectedDate })); 
    }
  }, [])

  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h6">{t('happened')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <Grid container justifyContent="space-around">
            {/**Date picker for selecting date for the event. */}
            <DatePicker 
              renderInput = {props => 
              <TextField 
                id="date-picker-inline"
                label={t('date_picker_inline')}
                margin="normal"
                fullWidth
                style={{ minHeight: '4rem'}}
                {...props}
              /> 
              }
              inputFormat="dd.MM.yyyy"
              mask="__.__.____"
              showToolbar={false}
              value={selectedDate}
              onChange={handleDateChange}
              OpenPickerButtonProps={{
                "aria-label": "change date"
              }}
              
            />
            {/**Time picker for selecting time for the event. */}
            <TimePicker
              renderInput = {props => 
                <TextField 
                  id="time-picker"
                  label={t('time_picker')}
                  margin="normal"
                  fullWidth
                  style={{ minHeight: '4rem'}}
                  {...props}
                /> 
              }
              ampm={false}
              value={selectedDate}
              onChange={handleDateChange}
              OpenPickerButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default ReportStepTwo;

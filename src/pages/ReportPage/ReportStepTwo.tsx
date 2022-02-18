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
const ReportStepTwo = () => {
  const { currentReport } = useSelector((state: any) => state.report);
  const [selectedDate, setSelectedDate] = React.useState(new Date()); // new Date() returns current date
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const handleDateChange = (date: any) => {
    console.log('Date', date);
    setSelectedDate(date);
    dispatch(setReport({ ...currentReport, date: date.toLocaleString() })); // convert date to the format: "30/07/2021, 19:28:40"
  };

  console.log('selectedDate', selectedDate);

  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h6">{t('happened')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <Grid container justifyContent="space-around">
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
              showToolbar={false}
              value={selectedDate}
              onChange={handleDateChange}
              OpenPickerButtonProps={{
                "aria-label": "change date"
              }}
              
            />
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

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Typography } from '@material-ui/core';
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label={t('date_picker_inline')}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label={t('time_picker')}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default ReportStepTwo;

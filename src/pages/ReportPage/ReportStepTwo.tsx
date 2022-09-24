import 'date-fns';
import React, { useEffect } from 'react';
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

/**Second step (page) of the new report form. */
const ReportStepTwo = ({setStepTwoError}:any) => {
  const { currentReport } = useSelector((state: any) => state.report);
  
  /**If current report is missing a date, select current date. */
  const [selectedDate, setSelectedDate] = React.useState(currentReport.date === "" ? new Date() : currentReport.date);
  
  /**We need to keep different states for date input field 
   * and time input field to be able to check for errors.*/
  const [inputDate, setInputDate] = React.useState(currentReport.date === "" ? new Date() : currentReport.date);
  const [inputTime, setInputTime] = React.useState(currentReport.date === "" ? new Date() : currentReport.date);

  const [dateErrorHelper, setDateErrorHelper] = React.useState('');
  const [timeErrorHelper, setTimeErrorHelper] = React.useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation()
  
  useEffect(() => {
    if (currentReport.date === ""){
      if (selectedDate.toString() !== 'Invalid Date') {
        dispatch(setReport({ ...currentReport, date: selectedDate }))
      } else {
        dispatch(setReport({ ...currentReport, date: new Date() }))
      }
    } 
  }, [])
  const handleDateChange = (date: any) => {
    /**If date in input field is empty, stop here. */
    if (date === null)
      return
    let tempDate = new Date(selectedDate)
    tempDate.setDate(date.getDate())
    tempDate.setMonth(date.getMonth())
    tempDate.setFullYear(date.getFullYear())
    setInputDate(tempDate);

    if (tempDate.toString() !== 'Invalid Date') {
      /**Only if date in inputfield was a valid Date, set it as selected date */
      setSelectedDate(tempDate);
      dispatch(setReport({ ...currentReport, date: tempDate })); 
    }

    /**Validate and show helper text under invalid time or date. */
    validatePickers(tempDate, inputTime)
  };

  const handleTimeChange = (date: any) => {
    /**If time in input field is empty, stop here. */
    if (date === null)
      return
    let tempDate = new Date(selectedDate)
    tempDate.setHours(date.getHours())
    tempDate.setMinutes(date.getMinutes())
    tempDate.setSeconds(0)
    setInputTime(tempDate);

    if (tempDate.toString() !== 'Invalid Date') {
      /**Only if time in inputfield was a valid Date, set it as selected date */
      setSelectedDate(tempDate);
      dispatch(setReport({ ...currentReport, date: tempDate })); 
    }

    /**Validate and show helper text under invalid time or date. */
    validatePickers(inputDate, tempDate)
  };
  
  const validatePickers = (date: Date, time: Date) => {
    let pickersInvalid = false
    let today = new Date()

    /**If selected date is in future, show helpertext under date picker to advice
     * that future dates are not allowed. Compare only date, not time.
     */
    let dateOnly = new Date(date)
    dateOnly.setHours(0)
    dateOnly.setMinutes(0)
    dateOnly.setSeconds(0)
    dateOnly.setMilliseconds(0)
    if (dateOnly.getTime() > today.getTime()){
      setDateErrorHelper(t('report_date_cannot_be_in_future'))
      pickersInvalid = true
    } else {
      setDateErrorHelper('')
    }
 
    
    let timeOnly = new Date(time)
    timeOnly.setDate(1)
    timeOnly.setMonth(1)
    timeOnly.setFullYear(1900)

    let timeOnlyNow = new Date()
    timeOnlyNow.setDate(1)
    timeOnlyNow.setMonth(1)
    timeOnlyNow.setFullYear(1900)

    let dateOnlyNow = new Date()
    dateOnlyNow.setHours(0)
    dateOnlyNow.setMinutes(0)
    dateOnlyNow.setSeconds(0)
    dateOnlyNow.setMilliseconds(0)

    /**If selected date is in future OR if date is today and time is in future,
     * show helpertext under date picker to advice that future dates are not allowed.
     */
    if (dateOnly.getTime() > dateOnlyNow.getTime() || (
        dateOnly.getTime() === dateOnlyNow.getTime() && 
        timeOnly.getTime() > timeOnlyNow.getTime())){
      setTimeErrorHelper(t('report_time_cannot_be_in_future'))
      pickersInvalid = true
    } else {
      setTimeErrorHelper('')
    }

    /**If either inputfield (time or date) is invalid or selected date and/or time is in future, 
     * set stepTwoError state true. Used in ReportForm to prevent user moving to next step.
     */
    if (date.toString() === 'Invalid Date' || 
        time.toString() === 'Invalid Date' || 
        pickersInvalid){
      setStepTwoError(true)
    } else {
      setStepTwoError(false)
    }
  }
  /**Determine max selectable time for time picker */
  const getMaxTime = () => {
    let maxTime = new Date()
    let selectedDateOnly = new Date(selectedDate)
    selectedDateOnly.setHours(0)
    selectedDateOnly.setMinutes(0)
    selectedDateOnly.setSeconds(0)
    selectedDateOnly.setMilliseconds(0)
    
    let dateOnlyNow = new Date()
    dateOnlyNow.setHours(0)
    dateOnlyNow.setMinutes(0)
    dateOnlyNow.setSeconds(0)
    dateOnlyNow.setMilliseconds(0)
   
    if (selectedDateOnly.getTime() > dateOnlyNow.getTime()) {
       /**If selected Date is in future, set max time to 00:00*/
      maxTime.setHours(0)
      maxTime.setMinutes(0)
      maxTime.setSeconds(0)
      maxTime.setMilliseconds(0)
      return maxTime
    } else if (selectedDateOnly.getTime() === dateOnlyNow.getTime()){
       /**If selected Date is today, set max time to current time*/
      return maxTime
    }else {
      return null
    }
  }
  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h2" className='header5'>{t('happened')}</Typography>
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
                helperText={dateErrorHelper}
                style={{ minHeight: '4rem'}}
                {...props}
              /> 
              }
              inputFormat="dd.MM.yyyy"
              mask="__.__.____"
              showToolbar={false}
              value={inputDate}
              onChange={handleDateChange}
              maxDate={new Date()}
              disableFuture={true}
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
                  helperText={timeErrorHelper}
                  style={{ minHeight: '4rem'}}
                  {...props}
                /> 
              }
              ampm={false}
              maxTime={getMaxTime()}
              value={inputTime}
              onChange={handleTimeChange}
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

import 'date-fns'
import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const MoodStepTwo = () => {
  const { t } = useTranslation()
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <>
      <Typography> {t('when_did_this_happen')}</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container justifyContent='space-around'>
          <DatePicker
            renderInput={(props) => (
              <TextField
                id='date-picker-inline'
                label='Date picker inline'
                margin='normal'
                fullWidth
                style={{ minHeight: '4rem' }}
                {...props}
              />
            )}
            inputFormat='dd.MM.yyyy'
            showToolbar={false}
            value={selectedDate}
            onChange={handleDateChange}
            OpenPickerButtonProps={{
              'aria-label': 'change date',
            }}
          />

          <TimePicker
            renderInput={(props) => (
              <TextField
                id='time-picker'
                label='Time picker'
                margin='normal'
                fullWidth
                style={{ minHeight: '4rem' }}
                {...props}
              />
            )}
            ampm={false}
            value={selectedDate}
            onChange={handleDateChange}
            OpenPickerButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </LocalizationProvider>
    </>
  )
}
export default MoodStepTwo

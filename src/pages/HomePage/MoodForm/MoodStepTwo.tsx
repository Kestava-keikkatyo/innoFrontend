import 'date-fns'
import React from 'react'
import Grid from '@mui/material/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const MoodStepTwo = () =>{
  const { t } = useTranslation()
// The first commit of Material-UI
const [selectedDate, setSelectedDate] = React.useState(
  new Date('2014-08-18T21:11:54')
)

const handleDateChange = (date: any) => {
  setSelectedDate(date)
}

return <>
  <Typography> {t("when_did_this_happen")}</Typography>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justifyContent="space-around">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label="Time picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>
</>;

}
export default MoodStepTwo
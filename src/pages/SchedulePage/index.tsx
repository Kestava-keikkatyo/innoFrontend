import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import PageLoading from '../../components/PageLoading'
import { ThemeProvider, Typography, createTheme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { fetchUserById } from '../../actions/usersActions'
import { LocalizationProvider, CalendarPicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import './calendar.css'
import fi from 'dayjs/locale/fi'
import en from 'dayjs/locale/en'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const minDate = dayjs('1940-01-01T00:00:00.000')
const maxDate = dayjs('2080-01-01T00:00:00.000')

const SchedulePage: React.FC = () => {
  const classes = useStyles()
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const { t } = useTranslation()

  const myUserId = useSelector((state: IRootState) => state.user.data._id)

  // TODO: If schedule page needs personalization, use profileData.
  const profileData = useSelector((state: IRootState) => state.users.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserById(myUserId))
  }, [dispatch, myUserId])

  if (!profileData || myUserId !== profileData._id) return <PageLoading />

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,

      allVariants: {
        color: 'black',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography className='header' variant='h1'>
            {t('schedule_title')}
          </Typography>
        </div>
        <div className={classes.calendarContainer}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            locale={i18next.language === 'en' ? en : fi}
          >
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
              minDate={minDate}
              maxDate={maxDate}
              dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase() + day.slice(1)}
              className='calendar'
            />
          </LocalizationProvider>
        </div>
      </div>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    flex: '4',
    padding: '20px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  calendarContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '20px',
    width: '100%',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
}))

export default SchedulePage

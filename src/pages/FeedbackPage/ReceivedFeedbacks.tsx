import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import { Link } from 'react-router-dom'
import makeStyles from '@mui/styles/makeStyles'
import { fetchFeedbacksAppointedToMe } from '../../actions/feedBackActions'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import moment from 'moment'
import { Container, ThemeProvider, Typography, createTheme } from '@mui/material'

const ReceivedFeedbacks: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const classes = useStyles()
  const { feedbacks } = useSelector((state: IRootState) => state.feedback || [])
  console.log('FEEDBACKS: ' + feedbacks)

  useEffect(() => {
    dispatch(fetchFeedbacksAppointedToMe())
  }, [dispatch])

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      fontWeightBold: 'bold',
      allVariants: {
        color: 'black',
      },
    },
  })

  const rows = feedbacks

  const columns: GridColDef[] = [
    {
      field: 'senderName',
      headerName: i18next.t('feedback_sender'),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return <span>{params.row.anonymous ? t('anonymous') : params.row.senderName}</span>
      },
    },
    {
      field: 'createdAt',
      headerName: i18next.t('sending_date'),
      minWidth: 125,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>
      },
    },
    {
      field: 'anonymity',
      headerName: i18next.t('feedback_anonymity'),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <span>
            {params.row.anonymous ? t('feedback_anonymity_yes') : t('feedback_anonymity_no')}
          </span>
        )
      },
    },
    {
      field: 'action',
      headerName: i18next.t('feedback_action'),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <Link style={{ color: 'black' }} to={'/feedback/receivedDetails/' + params.id}>
            {t('feedback_details')}
          </Link>
        )
      },
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <div style={{ paddingTop: '30px', backgroundColor: '', height: '75vh' }}>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>
            {t('feedback')}
          </Typography>
          <DataGrid
            sx={{
              '& .super-app-theme--header': {
                backgroundColor: '#C0CFFA',
                borderRight: '3px solid white',
              },
              '.MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '&.MuiDataGrid-root': {
                border: 'none',
              },
            }}
            style={{ marginTop: '20px', border: '3px solid #C0CFFA', borderRadius: '0' }}
            getRowId={(row) => row._id}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
      </Container>
    </ThemeProvider>
  )
}
const useStyles = makeStyles(() => ({
  update: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer',
  },
}))

export default ReceivedFeedbacks

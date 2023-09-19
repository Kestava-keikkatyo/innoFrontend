import React from 'react'

import { Button, Container, Typography } from '@mui/material'
import ReportForm from '../ReportPage/ReportForm'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { setReport } from '../../actions/reportActions'
import { initialReport } from '../../reducers/reportReducer'
import { useDispatch } from 'react-redux'
import { setFiles } from '../../actions/fileActions'

/*
TODO: Rename report pages filenames. ReportsPage is now main page
and ReportPage in index.tsx is used only when writing a new report.
*/
const ReportPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleBack = () => {
    //Clear current report when moving back to reports list.
    dispatch(setReport(initialReport))
    dispatch(setFiles([null, null, null]))
    history.push('/reports')
  }
  return (
    <Container style={{ marginTop: 20 }}>
      {/**Title when writing a new report */}
      <Typography style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        {t('report')}
      </Typography>
      {/**Back button takes back to reports page */}
      <Button
        variant='outlined'
        onClick={handleBack}
        sx={{
          color: 'primary',
          marginTop: '1em',
          marginBottom: '1em',
        }}
      >
        {t('report_back_to_reports')}
      </Button>
      {/**Actual new report form */}
      <ReportForm />
    </Container>
  )
}

export default ReportPage

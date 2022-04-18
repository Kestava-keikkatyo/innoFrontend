import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const ReportReplyPage = () => {
  const report = useSelector((state:any) => state.report.currentReport)
  const { t } = useTranslation()

  console.log('current report: ', report)
  
  return (
    <Container>
      
      <Typography variant='h4' color="primary" sx={{paddingTop: 10, paddingBottom: 3}}>
        {t('report_reply_title')}
      </Typography>
      <Typography 
        variant='h6' 
        sx={{
          color: '#EB5A00', 
          textDecoration: 'underline', 
          paddingBottom: 1
        }}
      >
        {report.title}
      </Typography>
      <Typography variant='body1'>
        {report.details}
      </Typography>
      <Box sx={{paddingTop: '1em'}}>
        <Typography variant="body1" sx={{color: '#EB5A00'}}>
          {t('report_worker_info')}
        </Typography>
        <Typography variant="body2">
          {report.user.name}
        </Typography>
        <Typography variant="body2">
          {report.user.email}
        </Typography>
        <Typography variant="body2">
          {report.user.phoneNumber}
        </Typography>
      </Box>
      <Typography 
        variant='h6' 
        sx={{
          color: '#EB5A00', 
          paddingBottom: 1,
          paddingTop: '1em',
        }}
      >
        {t('report_reply_answer')}
      </Typography>
      <TextField 
        multiline 
        minRows='4' 
        variant="outlined" 
        sx = {{
          width: '90%',
        }}
      />
    </Container>
  )
}

export default ReportReplyPage
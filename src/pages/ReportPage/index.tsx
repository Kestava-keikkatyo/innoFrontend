import React from 'react'

import { Container, Typography } from '@material-ui/core'
import ReportForm from '../ReportPage/ReportForm'

const ReportPage = () => {
  return (
    <Container>
      <Typography variant="h4" color="primary">
        Report
      </Typography>
      <ReportForm />
    </Container>
  )
}

export default ReportPage

import { TextField, Typography } from '@material-ui/core'
import React from 'react'
import FileUploader from '../../components/FileUploader'

export interface ReportStepThreeProps {}

const ReportStepThree: React.FC<ReportStepThreeProps> = () => {
  return (
    <>
      <Typography>Fill in Details</Typography>
      <TextField multiline rows={4} variant="outlined" />
      <FileUploader handleFile={() => ''}>
        <span>Upload file</span>
      </FileUploader>
    </>
  )
}

export default ReportStepThree

import { TextField, Typography } from '@material-ui/core'
import React from 'react'
import FileUploader from '../../components/FileUploader'


export interface ReportStepThreeProps {
  //addMessage(message: any): void;
}

const ReportStepThree: React.FC<any> = () => {

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

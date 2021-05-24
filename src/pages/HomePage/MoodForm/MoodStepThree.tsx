import { TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import FileUploader from '../../../components/FileUploader'


export interface MoodStepThreeProps {
    message: string
}

const MoodStepThree: React.FC<MoodStepThreeProps> = ({message}) => {

  return (
    <>
      <Typography>Fill in Details</Typography>
      <TextField value={message} multiline rows={4} variant="outlined" />
      <FileUploader handleFile={() => ''}>
        <span>Upload file</span>
      </FileUploader>
    </>
  )
}

export default MoodStepThree
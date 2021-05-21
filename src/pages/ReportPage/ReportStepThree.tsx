import { TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import FileUploader from '../../components/FileUploader'

import {submitFeeling, updateDataSet, updateFeeling} from '../../actions/feelingActions'
import { useDispatch, useSelector } from 'react-redux'
import { FeelingState, UPDATE_FEELING_DATASET } from '../../types/state'
import { IRootState } from '../../utils/store'
import { AnySchemaConstructor } from 'yup'

export interface ReportStepThreeProps {
  //addMessage(message: any): void;
}

const ReportStepThree: React.FC<any> = () => {

  const [message, setMessage]: any = React.useState('')

  const dispatch:any = useDispatch()

  const currentFeeling:any = useSelector<IRootState>(state => state.feeling.currentFeeling)



  const updateMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    currentFeeling.note = message
    dispatch(updateFeeling(currentFeeling))
    //addMessage(message)
  };

  return (
    <>
      <Typography>Fill in Details</Typography>
      <TextField onChange={updateMessage} value={message} multiline rows={4} variant="outlined" />
      <FileUploader handleFile={() => ''}>
        <span>Upload file</span>
      </FileUploader>
    </>
  )
}

export default ReportStepThree

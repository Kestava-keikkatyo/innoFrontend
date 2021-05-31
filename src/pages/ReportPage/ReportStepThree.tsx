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

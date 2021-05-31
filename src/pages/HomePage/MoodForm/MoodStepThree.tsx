import { TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useRef } from 'react'
import FileUploader from '../../../components/FileUploader'
import { useDispatch, useSelector } from "react-redux"
import { updateFeeling} from '../../../actions/feelingActions'
import { IRootState } from '../../../utils/store'
import feelingService from '../../../services/feelingService'


export interface MoodStepThreeProps {

}

const MoodStepThree: React.FC<any> = () => {

  const dispatch:any = useDispatch()

  const currentFeeling:any = useSelector<IRootState>(state => state.feeling.currentFeeling)

  const handleChange = (event:any) => {
    currentFeeling.note = event.target.value
    console.log("MoodStepThree:currentFeeling: ", currentFeeling)
    dispatch(updateFeeling(currentFeeling))
  };


  return (
    <>
      <Typography>Write a comment</Typography>
      <TextField onChange={handleChange} placeholder='Tell us about your feeling...' multiline rows={4} variant="outlined" />
      <FileUploader handleFile={() => ''}>
        <span>Upload file</span>
      </FileUploader>
    </>
  )
}

export default MoodStepThree
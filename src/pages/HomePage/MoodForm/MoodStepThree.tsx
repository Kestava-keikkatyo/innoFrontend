import { TextField, Typography } from '@mui/material'
import React from 'react'
import FileUploader from '../../../components/FileUploader'
import { useDispatch, useSelector } from 'react-redux'
import { updateFeeling } from '../../../actions/feelingActions'
import { IRootState } from '../../../utils/store'
import { useTranslation } from 'react-i18next'

export interface MoodStepThreeProps {}

const MoodStepThree: React.FC<any> = () => {
  const dispatch: any = useDispatch()

  const { t } = useTranslation()

  const currentFeeling: any = useSelector<IRootState>((state) => state.feeling.currentFeeling)

  const handleChange = (event: any) => {
    dispatch(updateFeeling({ ...currentFeeling, note: event.target.value }))
  }

  return (
    <>
      <Typography>{t('Kirjoita kommentti')}</Typography>
      <TextField
        onChange={handleChange}
        placeholder={t('tell_feelings')}
        multiline
        rows={4}
        variant='outlined'
      />
      <FileUploader name={t('upload_file')} handleFile={() => ''} accept='image/*' />
    </>
  )
}

export default MoodStepThree

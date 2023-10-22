import React, { useRef, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { createFile } from '../../services/companyMaterialService'
import { loadUser } from '../../utils/storage'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useDispatch } from 'react-redux'
import { setAlert } from '../../actions/alertActions'
import { CompanyFile, severity } from '../../types/types'

interface FileChooserProps {
  setFiles: any
  files: CompanyFile[]
}

const FileChooser: React.FC<FileChooserProps> = ({ setFiles, files }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false) // State to control the dialog
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const file = files[0]
      setFile(file)
      setOpen(true) // Open the dialog when a file is selected
    }
  }

  const handleDialogClose = async (shouldUpload: boolean) => {
    if (shouldUpload && file) {
      if (title === '' || description === '') {
        dispatch(setAlert(i18next.t('file_field_error'), severity.Error))
      } else {
        setOpen(false)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('creator', loadUser()._id)

        try {
          const newFile = await createFile(formData)
          setFiles((files: CompanyFile[]) => [...files, newFile])
          dispatch(setAlert(i18next.t('file_upload_success'), severity.Success))
        } catch (error) {
          dispatch(setAlert(i18next.t('file_upload_error'), severity.Error))
        }
      }
    }
  }

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={handleClick}
        sx={{ marginTop: '40px', marginLeft: '10px' }}
      >
        {t('file_upload_button')}
      </Button>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={(event) => handleFileChange(event)}
      />
      <Dialog open={open} onClose={() => handleDialogClose(false)}>
        <DialogTitle>{t('file_information')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('file_information_prompt')}</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label={t('file_title') + '*'}
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin='dense'
            label={t('file_description') + '*'}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose(false)}>{t('file_popup_cancel')}</Button>
          <Button onClick={() => handleDialogClose(true)}>{t('file_popup_upload')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FileChooser

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

const FileChooser: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false) // State to control the dialog
  const { t } = useTranslation()

  const handleClick = () => {
    if (fileInputRef.current) {
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
    setOpen(false)
    if (shouldUpload && file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('title', title)
      formData.append('description', description)
      formData.append('creator', loadUser()._id)

      try {
        const uploadedFile = await createFile(formData)
        console.log('File uploaded successfully:', uploadedFile)
      } catch (error) {
        console.error('File upload failed:', error)
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
        onChange={handleFileChange}
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

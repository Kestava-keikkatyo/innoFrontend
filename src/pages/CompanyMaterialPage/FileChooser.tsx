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

const FileChooser: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false) // State to control the dialog

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
      <Button variant='contained' color='primary' onClick={handleClick}>
        Open File Dialog
      </Button>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Dialog open={open} onClose={() => handleDialogClose(false)}>
        <DialogTitle>Enter File Details</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter a title and description for the file.</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='Title'
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin='dense'
            label='Description'
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose(false)}>Cancel</Button>
          <Button onClick={() => handleDialogClose(true)}>Upload</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FileChooser

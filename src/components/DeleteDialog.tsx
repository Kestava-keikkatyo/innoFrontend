import React from 'react'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'

export interface DeleteDialogProps {
  title: string
  itemToBeDeleted: string
  open: boolean
  onClose: (value: string) => void
}

const DeleteDialog = (props: any) => {
  const { title, onClose, itemToBeDeleted, open } = props

  const handleClose = () => {
    onClose()
  }

  const handleConfirm = (item: string) => {
    onClose(item)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={() => handleClose()}>No</Button>
        <Button onClick={() => handleConfirm(itemToBeDeleted)} key={itemToBeDeleted}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog

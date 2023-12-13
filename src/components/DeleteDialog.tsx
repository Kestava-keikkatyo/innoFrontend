import React from 'react'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

export interface DeleteDialogProps {
  title: string
  itemToBeDeleted: string
  open: boolean
  onClose: (value: string) => void
}

const DeleteDialog = (props: any) => {
  const { title, onClose, itemToBeDeleted, open } = props
  const { t } = useTranslation()

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
        <Button onClick={() => handleClose()}>{t('delete_dialog_no')}</Button>
        <Button onClick={() => handleConfirm(itemToBeDeleted)} key={itemToBeDeleted}>
          {t('delete_dialog_yes')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog

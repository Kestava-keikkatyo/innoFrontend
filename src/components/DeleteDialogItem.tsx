import React from 'react'
import {
    Tooltip,
    IconButton,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import DeleteDialog from './DeleteDialog';
import { red } from '@mui/material/colors';

export interface DeleteDialogItemProps {
    title: string;
    itemId: string;
    onConfirm: (value: string) => void;
}

/**
 * @component
 * @description
 * A separate class between DeleteDialog and EmploymentContractsTable
 * needed to control the state of contractToDelete
 * so that a correct contract gets deleted.
 * @returns Grid
 */
const DeleteDialogItem = (props: any) => {

  const {title, itemId, onConfirm} = props;

  const [itemToDelete, setItemToDelete] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
      setItemToDelete(itemId)
      setOpen(true)
  }
  
  const handleClose = (id: string) => {
      setItemToDelete(id)
      setOpen(false)
      onConfirm(id)
  }

  return(
    <Tooltip title="Delete" placement="top" arrow>
      <>
      <IconButton
        aria-label="delete item"
        color="secondary"
        size="large"
        onClick={handleOpen}>
          <DeleteIcon sx={{ color: red[500] }}/>
      </IconButton>
      <DeleteDialog
          title={title}
          itemToBeDeleted={itemToDelete}
          open={open}
          onClose={handleClose}
      />
      </>
  </Tooltip>
  ) 
}

export default DeleteDialogItem;

import React from 'react'
import {
    Tooltip,
    IconButton,
  } from '@mui/material';

  import {
    Delete as DeleteIcon
  } from '@mui/icons-material';
import DeleteDialog from '../../components/FormComponents/DeleteDialog';
import { red } from '@mui/material/colors';

export interface DeleteDialogItemProps {
    contractId: string;
    onConfirm: (value: string) => void;
  }

const DeleteDialogItem = (props: any) => {

    const {contractId, onConfirm} = props;

    const [contractToDelete, setContractToDelete] = React.useState('')
    const [open, setOpen] = React.useState(false)
  
    const handleOpen = () => {
        setContractToDelete(contractId)
        setOpen(true)
    }
    
    const handleClose = (contractId: string) => {
        setContractToDelete(contractId)
        setOpen(false)
        onConfirm(contractId)
    }
  
    return(
      <Tooltip title="Delete" placement="top" arrow>
        <>
        <IconButton
            aria-label="delete contract"
            color="secondary"
            size="large"
            onClick={handleOpen}>
                <DeleteIcon sx={{ color: red[500] }}/>
        </IconButton>
        <DeleteDialog
            title="Permanently remove connection between the recipients?"
            itemToBeDeleted={contractToDelete}
            open={open}
            onClose={handleClose}
            >
        </DeleteDialog>
        </>
    </Tooltip>
    ) 
  }

export default DeleteDialogItem;
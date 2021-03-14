import React from "react"

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
} from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { addBusinessContract } from "../../actions/businessContractActions"
import { setAlert } from "../../actions/alertActions"
import { severity, businessContractType, roles } from "../../types/types"

const WorkerModal: React.FC<any> = ({ displayModal, closeModal, workerData }) => {
  const dispatch = useDispatch()
  const { madeContracts } = useSelector((state: any) => state.businessContracts)
  
  const addContract = () => {
    if (!madeContracts.some((value: any) => value.business?.id === workerData.id || value.user?.id === workerData.id)) {
      dispatch(addBusinessContract(workerData, workerData.feelings ? roles.Worker: roles.Business))
      dispatch(setAlert("Success: Invitation sent to worker", severity.Success))
    } else {
      dispatch(setAlert("Failed: You allready have contract with this worker.", severity.Error))
    }
    closeModal()
  }

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add to your organization</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {workerData && (
          <Typography color="textSecondary" variant="body2">
            id: {workerData.id} <br />
            name: {workerData.name} <br />
            created: {workerData.createdAt} <br />
            email: {workerData.email}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined"
          onClick={addContract}>
          create contract
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WorkerModal

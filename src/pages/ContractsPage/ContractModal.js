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

const WorkerModal = ({ displayModal, closeModal, workerData }) => {
  const dispatch = useDispatch()
  const { madeContracts } = useSelector(state => state.businessContracts)

  const addContract = () => {
    if (!madeContracts.some((value) => value.business?.id === workerData.id || value.user?.id === workerData.id)) {
      dispatch(addBusinessContract(workerData, workerData.feelings ? 'worker': 'business'))
      dispatch(setAlert("Success: Invitation sent to worker", "success"))
    } else {
      dispatch(setAlert("Failed: You allready have contract with this worker.", "error"))
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

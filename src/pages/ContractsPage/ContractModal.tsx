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
import { severity, roles } from "../../types/types"
import { IRootState } from "../../utils/store"

/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {worker} props.workerData data of the added worker.
 */
const WorkerModal: React.FC<any> = ({ displayModal, closeModal, workerData }) => {
  const dispatch = useDispatch()
  const { businessContract } = useSelector((state: IRootState) => state.businessContracts)
  
  const addContract = () => {
    if (!businessContract.some((value: any) => value.requestContracts.businesses.includes(workerData._id)  || value.requestContracts.workers.includes(workerData._id))) {
      dispatch(addBusinessContract(businessContract[0]._id, workerData._id))
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
            id: {workerData._id} <br />
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

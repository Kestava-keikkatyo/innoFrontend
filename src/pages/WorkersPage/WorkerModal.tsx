import React, { useEffect, useState } from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessContracts } from '../../actions/businessContractActions'
import { addWorkContract } from '../../actions/workContractActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A modal panel to connect worker user with business user.
 * @param props
 * @param {state} props.modalState
 * @param {worker} props.workerData
 */
const WorkerModal: React.FC<any> = ({ modalState, workerData }) => {
  const {displayModal, setDisplayModal} = modalState
  const [business, setBusiness] = useState('')
  const businessContracts = useSelector((state: IRootState) => state.businessContracts.madeContracts)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBusinessContracts())
  }, [dispatch])

  const submit = () => {
    // if ((business.typeof !== "object") || (workerData.typeof !== "object")) return
    dispatch(addWorkContract(workerData, business))
    closeModal()
  }

  const closeModal = () => setDisplayModal(false)

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            Add to organization
          </Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {workerData &&
          <Typography color="textSecondary" variant="body2">
            id: {workerData.id} <br />
            created: {workerData.createdAt} <br />
            email: {workerData.email}
          </Typography>
        }
        <div style={{ padding: '1em 0' }}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Business</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={business}
              onChange={({ target }: any) => setBusiness(target.value)}
            >
              { businessContracts.filter((bc: any) => bc.contractType === 'Business').map((bc: any) => 
                <MenuItem key={bc.id} value={bc}>{bc.business?.name}</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={submit} color="primary" variant="outlined">
          Add worker
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WorkerModal
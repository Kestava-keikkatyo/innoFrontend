import React, { useState } from 'react'

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

const WorkerModal = ({ displayModal, closeModal, workerData }) => {
  const [business, setBusiness] = useState('')

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
              onChange={(event) => setBusiness(event.target.value)}
            >
              <MenuItem value="business">business</MenuItem>
              <MenuItem value="business2">business2</MenuItem>
              <MenuItem value="business3">business3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary" variant="outlined">
          Add worker
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WorkerModal
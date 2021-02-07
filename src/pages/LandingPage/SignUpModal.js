import React from 'react'
import PropTypes from 'prop-types'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

/**
 * Modal for displaying terms of service and other same kind of stuff
 * @exports components/LandingPage/SignUpModal
 * @param {Object} props
 * @param {boolean} props.open - Determines if modal is displayed
 * @param {function} props.handleClose - Closes modal
 */
const SignUpModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            Sign Up modal
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

SignUpModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default SignUpModal
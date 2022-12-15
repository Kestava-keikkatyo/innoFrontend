import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

/**
 * @component
 * @desc Modal for displaying terms of service and other same kind of stuff
 * @param {Object} props
 * @param {boolean} props.open - Determines if modal is displayed
 * @param {function} props.handleClose - Closes modal
 */
const SignUpModal: React.FC<any> = ({ open, handleClose }) => {
  const { t } = useTranslation()
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
          {t('privacy_policy')}
          </Typography>
          <IconButton onClick={handleClose} size="large">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          {t('privacy_policies1')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies2')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies3')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies4')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies5')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies6')}
        </Typography>
        <Typography gutterBottom>
          {t('privacy_policies7')}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

SignUpModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default SignUpModal
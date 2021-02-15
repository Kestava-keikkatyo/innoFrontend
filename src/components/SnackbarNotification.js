import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAlert } from '../actions/alertActions'

const SnackbarNotification = () => {
  const alert = useSelector((state) => state.alert)
  const dispatch = useDispatch()
  
  const handleSnackbarClose = (_event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(clearAlert())
    }
  }

  return(
    <>
    <Snackbar open={alert.open} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity={alert.severity}
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SnackbarNotification
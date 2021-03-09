import { Snackbar, SnackbarCloseReason } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAlert } from '../actions/alertActions'

const SnackbarNotification: React.FC = () => {
  const alert = useSelector((state: any) => state.alert)
  const dispatch = useDispatch()
  
  const handleSnackbarClose = (_: React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
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
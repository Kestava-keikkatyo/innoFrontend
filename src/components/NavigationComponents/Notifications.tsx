import React from 'react'
import { Divider, List, ListItem, IconButton, Box, Typography, ListItemText, ListItemSecondaryAction, makeStyles, Tooltip } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { clearAllNotifications } from '../../actions/notificationsActions';

const Notifications: React.FC<any> = (props: { notifications: any, handleCloseNotifications:Function }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { notifications, handleCloseNotifications } = props
  const sortedNotifications = notifications.reverse()


  const handleClearAllNotifications = (notifications:[]) => {
    dispatch(clearAllNotifications(notifications))
  }

  const handleCloseAllNotifications = () => {
    handleCloseNotifications()
  }

  return (
    <Box>
      <Typography className={classes.notificationsHeader}>Ilmoitukset</Typography>
      <Divider />
      {sortedNotifications.length > 0 ? sortedNotifications.map((message: any) => {
        console.log(message)
        return (
          <>
            <List>
              <ListItem>
                <ListItemText className={classes.listItemText}
                  primary={message.text}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="check">
                    <CheckIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <Divider />
          </>
        )}) : <><Typography className={classes.noNotifications}>Ei ilmoituksia...</Typography><Divider/></>}
      <Tooltip title="Merkitse kaikki luetuksi" placement="bottom" arrow>
        <IconButton
          aria-label="Clear all notifications"
          aria-controls="menu-appbar"
          aria-haspopup="false"
          onClick={() => handleClearAllNotifications(sortedNotifications)}
          color="primary"
          className={classes.clearButton}
        >
          <ClearAllIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sulje ilmoitukset" placement="bottom" arrow>
        <IconButton
          aria-label="Close all notifications"
          aria-controls="menu-appbar"
          aria-haspopup="false"
          onClick={handleCloseAllNotifications}
          color="primary"
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  notificationsHeader: {
    textAlign: 'center',
    backgroundColor: 'gray',
    color: "orange"
  },
  clearButton: {
    width: '50%',
  },
  closeButton: {
    width: '50%',
  },
  noNotifications: {
    fontSize: '15px',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingRight: '30px',
    paddingLeft: '30px'
  },
  listItemText: {
    paddingTop: '15px',
    paddingBottom: '15px',
  }
}))

export default Notifications

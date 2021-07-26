import React from 'react'
import { Divider, List, ListItem, IconButton, Box, Typography, ListItemText, ListItemSecondaryAction, makeStyles, Tooltip, MenuItem } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { clearAllNotifications } from '../../actions/notificationsActions';

const Notifications: React.FC<any> = (props: { notifications: any, handleCloseNotifications: Function }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { notifications, handleCloseNotifications } = props
  const sortedNotifications = notifications.reverse()


  const handleClearAllNotifications = (notifications: []) => {
    dispatch(clearAllNotifications(notifications))
  }

  const handleCloseAllNotifications = () => {
    handleCloseNotifications()
  }

  return (
    <Box className={classes.box}>
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
        )
      }) : <><Typography className={classes.noNotifications}>Ei ilmoituksia...</Typography><Divider /></>}
      <MenuItem
        style={{ marginTop: 10 }}
        onClick={() => handleClearAllNotifications(sortedNotifications)}>
        <ClearAllIcon style={{ fontSize: 24, marginRight: 10 }}/>
        Empty all
      </MenuItem>
      <MenuItem onClick={handleCloseAllNotifications} style={{marginBottom: 10}}>
        <CloseIcon style={{ fontSize: 24, marginRight: 10 }}/>
        Exit 
      </MenuItem>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  box: {
    width: 300
  },
  notificationsHeader: {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px'
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
    paddingLeft: '30px',
    textAlign: 'center'
  },
  listItemText: {
    paddingTop: '15px',
    paddingBottom: '15px',
  }
}))

export default Notifications

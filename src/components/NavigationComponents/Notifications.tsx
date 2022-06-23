import React from 'react'
import {
  Divider,
  List,
  ListItem,
  IconButton,
  Box,
  Typography,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Button,
  ListItemButton,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CheckIcon from '@mui/icons-material/Check';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { clearAllNotifications } from '../../actions/notificationsActions';
import { useTranslation } from 'react-i18next'
import { Notification } from '../../types/types'

const Notifications: React.FC<any> = (props: { notifications: any, handleCloseNotifications: Function }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { notifications, handleCloseNotifications } = props
  const sortedNotifications = notifications.reverse()
  const { t } = useTranslation()

  const handleClearAllNotifications = (notifications: []) => {
    dispatch(clearAllNotifications(notifications))
  }

  const handleCloseAllNotifications = () => {
    handleCloseNotifications()
  }

  return (
    <Box className={classes.box}>
      <Typography className={classes.notificationsHeader}>{t('notifications')}
        <Button onClick={handleCloseAllNotifications} sx={{ position: 'absolute', top: 1, right: 1 }}>
            <CloseIcon style={{ position: 'absolute', top: 1, right: 1 }} />
          </Button>
      </Typography>
      <Divider />
      <List>
        {sortedNotifications.length > 0 ? sortedNotifications.map((item: Notification) => {
          return (
            <div key={item._id}>
              <ListItem key={item._id} style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <ListItemButton>
                 <ListItemText 
                  primary={item.type} 
                 />
               </ListItemButton>
               <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="check" size="large">
                    <CheckIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          );
        }) : <><Typography className={classes.noNotifications}>{t('no_notifications')}</Typography><Divider /></>}
      </List>
      <MenuItem
        style={{ marginTop: 10 }}
        onClick={() => handleClearAllNotifications(sortedNotifications)}>
        <ClearAllIcon style={{ fontSize: 24, marginRight: 10 }} />
        {t('empty_notifications')}
      </MenuItem>
    </Box>
  );
}

const useStyles = makeStyles(() => ({
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

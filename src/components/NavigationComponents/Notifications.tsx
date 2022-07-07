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
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CheckIcon from '@mui/icons-material/Check';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { clearAllNotifications } from '../../actions/notificationsActions';
import { useTranslation } from 'react-i18next'

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
        <Button onClick={handleCloseAllNotifications}
        style={{left:"32.5%", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',top:-11 }}>
          <CloseIcon style={{ fontSize: 22 }} />
        </Button>
      </Typography>
      <Divider />
      <List>
        {sortedNotifications.length > 0 ? sortedNotifications.map((message: any) => {
          return (
            <div key={message._id}>
              <ListItem key={message._id}>
                <ListItemText className={classes.listItemText}
                  primary={message.text}
                />
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

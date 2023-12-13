import React from 'react'
import {
  Divider,
  List,
  ListItem,
  IconButton,
  Box,
  Typography,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import { Notification } from '../../types/types'
import moment from 'moment'
import { clearNotification } from '../../actions/notificationsActions'
import history from '../../utils/history'
import { AssignmentOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

export interface BoxProps {
  notifications: Notification[]
  children?: React.ReactNode
  onClose: () => void
}

const Notifications = (props: BoxProps) => {
  const { notifications, children, onClose } = props
  const classes = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleCloseAllNotifications = () => {
    onClose()
  }

  const handleLinkClick = (notification: Notification) => {
    dispatch(clearNotification(notification))
    switch (notification.targetDoc) {
      case 'Agreement':
        break
      case 'EmploymentAgreement':
        history.push(`/userContracts`)
        break
      case 'Application':
        break
      case 'FeedBack':
        history.push(`/feedback/receivedDetails/${notification.target}`)
        break
      case 'Form':
        break
      case 'WorkRequest':
        history.push(`/receivedWorkRequests/details/${notification.target}`)
        break
    }
  }

  const renderNotificationMessage = (notification: Notification): string => {
    let message = `${moment(notification.createdAt).format('D.M.')} • `

    switch (notification.type) {
      case 'assignment':
        if (notification.targetDoc === 'WorkRequest') {
          message += `${notification.sender.firstName} ${notification.sender.lastName} ${t(
            'requested_work',
          )}`
        }
        break
      case 'feedback_pending':
        if (notification.targetDoc === 'FeedBack') {
          message += `${notification.sender.firstName} ${notification.sender.lastName} ${t(
            'sent_feedback',
          )}`
        }
        break
      case 'signature_pending':
        if (notification.targetDoc === 'EmploymentAgreement') {
          message += `${notification.sender.firstName} ${notification.sender.lastName} ${t(
            'sent_employment_agreement',
          )}`
        }
        break
    }
    return message
  }

  return (
    <Box className={classes.box}>
      {children}
      <Typography color='secondary' className={classes.notificationsHeader} variant='h5'>
        {t('notifications')}
        <IconButton
          onClick={handleCloseAllNotifications}
          sx={{ position: 'absolute', top: 1, right: 1 }}
        >
          <CloseIcon style={{ position: 'absolute', top: 1, right: 1 }} />
        </IconButton>
      </Typography>
      <Divider />
      <List>
        {notifications.length > 0 ? (
          notifications.map((item: Notification) => {
            return (
              <div key={item._id}>
                <ListItem
                  key={item._id}
                  style={{ display: 'flex', flexDirection: 'row', padding: 0 }}
                >
                  <ListItemButton onClick={() => handleLinkClick(item)}>
                    <ListItemText primary={renderNotificationMessage(item)} />
                    <AssignmentOutlined />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            )
          })
        ) : (
          <>
            <Typography className={classes.noNotifications}>{t('no_notifications')}</Typography>
            <Divider />
          </>
        )}
      </List>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  box: {
    width: 350,
  },
  notificationsHeader: {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  noNotifications: {
    fontSize: '15px',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingRight: '30px',
    paddingLeft: '30px',
    textAlign: 'center',
  },
  listItemText: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
}))

export default Notifications

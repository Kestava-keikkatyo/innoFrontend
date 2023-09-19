import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const FeelingDetails: React.FC<any> = () => {
  const classes = useStyles()
  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <h1 className={classes.userTitle}>Worker comment</h1>
      </div>
      <div className={classes.userContainer}>
        <div className={classes.userShow}>
          <span className={classes.userShowTitle}>Account Details</span>
          <div className={classes.userShowInfo}>
            <PermIdentity className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>name</span>
          </div>
          <span className={classes.userShowTitle}>Contact Details</span>
          <div className={classes.userShowInfo}>
            <PhoneAndroid className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>phone</span>
          </div>
          <div className={classes.userShowInfo}>
            <MailOutline className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> email</span>
          </div>
          <div className={classes.userShowInfo}>
            <LocationSearching className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>address</span>
          </div>
        </div>
        <div className={classes.userMessage}>
          <span className={classes.comment}>Comments</span>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  user: {
    flex: '4',
    padding: '20px',
  },
  userTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userShow: {
    flex: 1,
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  userMessage: {
    flex: 2,
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    marginLeft: '20px',
  },
  userTitle: {},
  userContainer: {
    display: 'flex',
    marginTop: '20px',
  },
  userShowTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgb(175, 170, 170)',
  },
  userShowInfo: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px',
    color: '#444',
  },
  userShowIcon: {
    fontSize: '16px !important',
  },
  userShowInfoTitle: {
    marginLeft: '10px',
  },
  comment: {
    fontSize: '24px',
    fontWeight: 600,
  },
}))

export default FeelingDetails

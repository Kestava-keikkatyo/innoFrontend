import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import React, { useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import { fetchReportById } from '../../actions/reportActions'

type UserUrlParams = {
  reportId: string
}

const ReportDetails: React.FC<any> = () => {
  const { reportId } = useParams<UserUrlParams>()
  const reportData: any = useSelector((state: IRootState) => state.report.currentReport)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchReportById(reportId))
  }, [dispatch, reportData.reportId])
  const classes = useStyles()

  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <h1 className={classes.userTitle}>Worker's Report</h1>
      </div>
      <div className={classes.userContainer}>
        <div className={classes.userShow}>
          <span className={classes.userShowTitle}>Sender</span>
          <div className={classes.userShowInfo}>
            <PermIdentity className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{reportData.workerName}</span>
          </div>
          <span className={classes.userShowTitle}>Sender's Contact Information</span>
          <div className={classes.userShowInfo}>
            <PhoneAndroid className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{reportData.workerPhone}</span>
          </div>
          <div className={classes.userShowInfo}>
            <MailOutline className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> {reportData.workerEmail}</span>
          </div>
          <div className={classes.userShowInfo}>
            <LocationSearching className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>address</span>
          </div>
          <span className={classes.userShowTitle}>Recipient</span>
          <div className={classes.userShowInfo}>
            <PermIdentity className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>name</span>
          </div>
        </div>
        <div className={classes.userMessage}>
          <span className={classes.userShowTitle}>Report Details</span>
          <div className={classes.userShowInfo}>
            <span className={classes.comment}>{reportData.details}</span>
          </div>
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
    fontSize: '15px',
  },
}))

export default ReportDetails

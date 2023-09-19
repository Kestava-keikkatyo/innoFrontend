import { LocationSearching, PermIdentity } from '@mui/icons-material'
import React, { useEffect } from 'react'
// import { Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import { fetchJobById } from '../../actions/jobActions'
import PageLoading from '../../components/PageLoading'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'
import moment from 'moment'

type JobUrlParams = {
  jobId: string
}
const JobDetails: React.FC = () => {
  const { t } = useTranslation()
  const { jobId } = useParams<JobUrlParams>()
  const jobData = useSelector((state: IRootState) => state.job.currentJob)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobById(jobId))
  }, [dispatch, jobId])
  const classes = useStyles()

  if (!jobData || jobId !== jobData._id) return <PageLoading />

  return (
    <div className={classes.job}>
      <div className={classes.jobTitleContainer}>
        <Typography className={classes.jobTitle} color='primary' variant='h4'>
          {t('job_details_title')}
        </Typography>
      </div>
      <div>
        <Stack direction='row' spacing={2} className={classes.stack}>
          <Button
            className={classes.button}
            color='secondary'
            component={Link}
            to='/job/application'
          >
            {t('job_apply')}
          </Button>
          <Button className={classes.button} color='secondary' component={Link} to='/jobs'>
            {t('back')}
          </Button>
        </Stack>
      </div>
      <div className={classes.jobContainer}>
        <div className={classes.jobShow}>
          <span className={classes.jobTitle}>{t('job_supplier')}</span>
          <div className={classes.jobShowInfo}>
            <PermIdentity className={classes.jobShowIcon} />
            <span className={classes.jobShowInfoTitle}>
              {jobData.user?.firstName} {jobData.user?.lastName}
            </span>
          </div>
          <span className={classes.jobTitle}>{t('job_specifics')}</span>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_category')}</span>
            <span className={classes.jobShowInfoTitle}>{jobData.category}</span>
          </div>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_title')}</span>
            <span className={classes.jobShowInfoTitle}>{jobData.title}</span>
          </div>
          <div className={classes.jobShowInfo}>
            <LocationSearching className={classes.jobShowIcon} />
            {[jobData.street, jobData.zipCode, jobData.city].join(', ')}
          </div>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_type')}</span>
            <span className={classes.jobShowInfoTitle}>{jobData.jobType}</span>
          </div>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_salary')}</span>
            <span className={classes.jobShowInfoTitle}>{jobData.salary}</span>
          </div>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_posted_at')}</span>
            <span className={classes.jobShowInfoTitle}>
              {' '}
              {moment(jobData.createdAt).format('DD/MM/YYYY')}
            </span>
          </div>
          <div className={classes.jobShowInfo}>
            <span className={classes.jobShowTitle}>{t('job_available_until')}</span>
            <span className={classes.jobShowInfoTitle}>
              {' '}
              {moment(jobData.applicationLastDate).format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
        <div className={classes.jobDescription}>
          <span className={classes.jobShowTitle}>{t('requirements_and_responsibilities')}</span>
          <div className={classes.jobShowInfo}>
            <span className={classes.details}>{jobData.requirements}</span>
          </div>
          <span className={classes.jobShowTitle}>{t('job_desirableSkills')}</span>
          <div className={classes.jobShowInfo}>
            <span className={classes.details}>{jobData.desirableSkills}</span>
          </div>
          <span className={classes.jobShowTitle}>{t('job_benefits')}</span>
          <div className={classes.jobShowInfo}>
            <span className={classes.details}>{jobData.benefits}</span>
          </div>
          <span className={classes.jobShowTitle}>{t('full_job_description')}</span>
          <div className={classes.jobShowInfo}>
            <span className={classes.details}>{jobData.details}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  job: {
    flex: '4',
    padding: '20px',
  },
  jobTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobShow: {
    flex: 1,
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  jobDescription: {
    flex: 2,
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    marginLeft: '20px',
  },
  jobTitle: {},
  jobContainer: {
    display: 'flex',
    marginTop: '20px',
  },
  jobShowTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#AFAAAA',
  },
  jobShowInfo: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0px 30px 10px',
    color: '#444',
  },
  jobShowIcon: {
    fontSize: '16px !important',
    marginRight: '5px',
  },
  jobShowInfoTitle: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  details: {
    fontSize: '15px',
    paddingTop: '0px',
  },
  stack: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    border: '1px solid',
    borderColor: 'secondary',
  },
}))

export default JobDetails

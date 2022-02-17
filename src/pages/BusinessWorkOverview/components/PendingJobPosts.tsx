import { AccordionSummary, Typography, AccordionDetails, Accordion, Divider, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: Theme) => ({
  details: {
    width: "100%"
  },
  root: {
    display: "inline-block"
  }
}));

const PendingJobPosts = (prop: { workContracts: Array<Object> }) => {
  const { workContracts } = prop
  const classes = useStyles()
  const { t } = useTranslation()



  return (
    <>
      <h2>{t("pending_jobs")}</h2>
      {workContracts.map((object:any) => (
        object.contracts.map((job:any) => (
          <Accordion key={job._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{t("work_task")}: {job.headline}</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.root }}>
              <div className={classes.details}>
                <Typography color="textSecondary">
                  {t('info')}: {job.detailedInfo}
                </Typography>
                <Typography>
                  {t('workers_count')}: {job.workerCount}
                </Typography>
              </div>
              <div className={classes.details}>
                <Typography>
                  {t('start_date')}: {format(new Date(job.validityPeriod.startDate), 'dd.MM.yyyy')}
                </Typography>
                <Typography>
                  {t('end_date')}: {format(new Date(job.validityPeriod.endDate), 'dd.MM.yyyy')}
                </Typography>
              </div>
              <div className={classes.details}>
                <Typography>
                  {t("created")}: {format(new Date(job.createdAt), 'dd.MM.yyyy hh:mm')}
                </Typography>
                <Divider />
                <Typography>
                  {t('agency_status')}: {job.acceptedAgency.toString()}
                </Typography>
                <Divider />
                <Typography>
                  {t('business_status')}: {job.acceptedBusiness.toString()}
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        ))
      ))}
      </>
  )
}

export default PendingJobPosts
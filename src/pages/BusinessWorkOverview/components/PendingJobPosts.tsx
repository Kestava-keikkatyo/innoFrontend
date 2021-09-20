import { AccordionSummary, Typography, AccordionDetails, Accordion, Divider, Theme, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
                  {t('start_date')}: {job.validityPeriod.startDate}
                </Typography>
                <Typography>
                  {t('end_date')}: {job.validityPeriod.endDate}
                </Typography>
              </div>
              <div className={classes.details}>
                <Typography>
                  {t("created")}: {job.createdAt}
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
import { AccordionSummary, Typography, AccordionDetails, Accordion, Divider, Theme, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

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

  return (
    <>
      <h2>Käsittelyssä olevat työkeikat</h2>
      {workContracts.map((object:any) => (
        object.contracts.map((job:any) => (
          <Accordion key={job._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>Työkeikka: {job.headline}</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.root }}>
              <div className={classes.details}>
                <Typography color="textSecondary">
                  Info: {job.detailedInfo}
                </Typography>
                <Typography>
                  Workers count: {job.workerCount}
                </Typography>
              </div>
              <div className={classes.details}>
                <Typography>
                  Start date: {job.validityPeriod.startDate}
                </Typography>
                <Typography>
                  End date: {job.validityPeriod.endDate}
                </Typography>
              </div>
              <div className={classes.details}>
                <Typography>
                  Created: {job.createdAt}
                </Typography>
                <Divider />
                <Typography>
                  Agency status: {job.acceptedAgency.toString()}
                </Typography>
                <Divider />
                <Typography>
                  Business status: {job.acceptedBusiness.toString()}
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
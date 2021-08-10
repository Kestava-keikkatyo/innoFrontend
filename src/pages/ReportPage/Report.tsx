import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardMedia, Grid } from '@material-ui/core';
import banner from '../../assets/form-banner.jpg';
import ReactPlayer from 'react-player';

const Report: React.FC<any> = ({ report }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>
              {report.reportTitle}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {report.date}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} style={{ marginRight: 16 }}>
            <div>
              <Typography variant="body1" className={classes.body1}>
                Work title
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.workTitle}
              </Typography>
            </div>
            <div style={{ marginTop: 16 }}>
              <Typography variant="body1" className={classes.body1}>
                Worker Info
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.workerName}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.workerEmail}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.workerPhone}
              </Typography>
            </div>
            <div>
              <Typography variant="body1" className={classes.body1}>
                Report Details
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.details}
              </Typography>
            </div>
          </div>
          <div className={classes.column}>
            {report.fileType === 'image' && (
              <CardMedia
                className={classes.media}
                image={report.fileUrl ? report.fileUrl : banner}
                title="Paella dish"
              />
            )}
            {report.fileType === 'video' && (
              <Grid item className={classes.playerWrapper}>
                {/*   https://www.npmjs.com/package/react-player   */}
                <ReactPlayer
                  url={report.fileUrl}
                  className={classes.reactPlayer}
                  width="100%"
                  height="100%"
                  controls
                />
              </Grid>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      border: '1px solid #E0E0E0',
      borderRadius: 5,
      marginBottom: 16,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    media: {
      height: 0,
      //border: '1px solid red',
      paddingTop: '56.25%', // 16:9
      borderRadius: 5,
    },
    playerWrapper: {
      position: 'relative',
      paddingTop: '56.25%' /* Percentage ratio for 16:9  720 / 1280 = 0.5625 */,
      //width: 'auto',
      //height: 'auto'
    },
    reactPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 5, // rounded corners
      overflow: 'hidden', // for some reason, overflow needs to be "hidden" to apply rounded corners
    },
    details: {
      //alignItems: 'center',
    },
    column: {
      flexBasis: '49%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    body1: {
      marginTop: 16,
      color: '#EB5A00',
    },
    body2: {
      marginTop: 8,
      color: theme.palette.text.secondary,
    },
  })
);

export default Report;

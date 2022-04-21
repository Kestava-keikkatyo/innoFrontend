import React from 'react';
import { Theme } from '@mui/material/styles';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, CardMedia, Grid } from '@mui/material';
import banner from '../../assets/form-banner.jpg';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setReport } from '../../actions/reportActions'
const Report: React.FC<any> = ({ report }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const localizedDate = report.date ? (new Date(report.date)).toLocaleString() : null;

  const handleAnswer = (reportId: any) => {
    console.log('Vastaa: ',reportId)
    dispatch(setReport(report))
    history.push(`/reports/answer`);
  }

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
              {report.title}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography display='inline' sx={{color: 'text.secondary', whiteSpace: 'pre'}}>{localizedDate} | </Typography>
            <Typography 
              display='inline'
              sx={
                report.status==='pending' ? {color: 'warning.main'}: {color: 'success.main'}
            }> 
              {report.status}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} style={{ marginRight: 16 }}>
            <div>
              <Typography variant="body1" className={classes.body1}>
                 {t('report_title')}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.title}
              </Typography>
            </div>
            <div style={{ marginTop: 16 }}>
              <Typography variant="body1" className={classes.body1}>
                {t('report_worker_info')}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.user.name}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.user.email}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.user.phoneNumber}
              </Typography>
            </div>
            <div>
              <Typography variant="body1" className={classes.body1}>
                {t('report_details')}
              </Typography>
              <Typography paragraph variant="body2" className={classes.body2} sx={{whiteSpace: 'pre-wrap'}}>
                {report.details}
              </Typography>
            </div>
          </div>
          <Box className={classes.column} sx={{paddingBottom: '2em'}}>
            {report.fileType === 'image' && (
              <CardMedia
                component='img'
                className={classes.media}
                image={report.fileUrl ? report.fileUrl : banner}
                sx={{
                  marginTop: '2em'
                }}
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
          </Box>
          
          {/*Jos raporttin ei ole vielä vastattu (status = pending), näytettän vastausnappi. Muutoin vastaus. */}
          {report.status === 'pending' ? 
          (
          <Button
            variant="contained"
            onClick={() => handleAnswer(report._id)}
            sx = {{
              marginTop: '1em',
              background: '#EB5A00',
              color: 'white',
            }}
          >
            {t('report_answer_button')}
          </Button>
          ) : (
            report.reply ? 
              <Box 
                sx={{
                  borderTop: 1,
                  borderColor: 'grey.500'
              }}>
                <Typography variant="body1" className={classes.body1}>
                  {t('report_reply_answer')}
                </Typography>
                <Typography variant="body2" className={classes.body2} sx={{whiteSpace: 'pre-wrap'}}>
                  { report.reply }
                </Typography>
              </Box>
              : 
              <Box sx={{color: 'error.main'}}>{t('report_reply_reply_missing')}</Box>
          )}
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
      //height: 0,
      //border: '1px solid red',
      //paddingTop: '56.25%', // 16:9
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

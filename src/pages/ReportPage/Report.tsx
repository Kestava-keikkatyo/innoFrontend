import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setReport, archiveReport, getMyReports, fetchReports } from '../../actions/reportActions'
import { roles, severity } from "../../types/types"
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { setAlert } from '../../actions/alertActions';

/*
  Report component represents one report in a list of reports (http://localhost:3000/reports)
*/
const Report: React.FC<any> = ({ report }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const role: any = useSelector((state: any) => state.user.data.role);  

  /*
  Report has archived-status stored in different fields depending on the user role.
  Here we select the correct field name.
  */
  let archivedRole = ""
  switch(role){
    case roles.Worker:
      archivedRole = 'workerArchived'
    break;
    case roles.Agency:
      archivedRole = 'agencyArchived'
    break;
    case roles.Business:
      archivedRole = 'businessArchived'
    break;
  }

  const handleAnswer = () => {
    //Reply to report. Redirect to reply-page
    dispatch(setReport(report))
    history.push(`/reports/answer`);
  }

  const handleArchive = async () => {
    //Archiving report
    await dispatch(archiveReport(report._id, 'true'))
    /*
    After archiving, load the reports again. Worker gets their own sent reports 
    and other get reports sent to them.
    */
    if (role === roles.Worker){
      dispatch(getMyReports());
    } else {
      dispatch(fetchReports());
    }
    dispatch(setAlert(t('report_is_archived_alert'), severity.Success))
  }

  const handleUnarchive = async () => {
    //Unarchiving report
    await dispatch(archiveReport(report._id, 'false'))
    /*
    After archiving, load the reports again. Worker gets their own sent reports 
    and other get reports sent to them.
    */
    if (role === roles.Worker){
      dispatch(getMyReports());
    } else {
      dispatch(fetchReports());
    }
    dispatch(setAlert(t('report_is_unarchived_alert'), severity.Success))
  }

  /*
  Määritetään statusviesti joka kuvaa onko raporttiin:
  -vastattu, 
  -vastattu osittain(kahdesta vastaanottajasta toinen vastannut) 
  -vai odottaako se vastausta.
  */
  let statusMessage = ""
  if (report.status ==='pending') {
    //Kukaan ei ole vastannut raporttiin
    statusMessage = t('report_status_pending')
  } else if (report.agency && report.business){
    //Raportilla on kaksi vastaanottajaa
    if (report.agencyReply && report.businessReply) {
      //Molemmat vastaanottajat ovat vastanneet
      statusMessage = t('report_status_replied')
    } else {
      //Vain toinen vastaanottaja on vastannut
      statusMessage = t('report_status_partially_replied')
    }
  } else {
    //Raportilla on vain yksi vastaanottaja ja tämä on vastannut
    statusMessage = t('report_status_replied')
  }

  //Styling of archived reports AccordionSummary
  const archivedSummaryStyling = (report[archivedRole] === 'true') ? 
    {
      fontStyle: 'italic',
      backgroundColor: 'grey.300',
    } 
  : {} 
  //Set reply-status color in AccordionSummary according to report.status (warning.main changed for contrast accessibility)
  const statusColor = report.status==='pending' ? '#CC4E00' : 'success.main'

  //Localize the date (date when the event happened) for AccordionSummary
  const localizedDate = report.date ? (new Date(report.date)).toLocaleString() : null;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
        style={{border: '2px solid #F47D20'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          sx={{
            ...archivedSummaryStyling,
          }}
      >
          {/**Title */}
          <Typography className='report1' sx={{ width: '30%'}}>
            {report.title}
          </Typography>
        
          {/**Date */}
          <Typography className='report1'
            display='inline' 
            sx={{color: 'text.secondary', width: '35%'}}
          >
            {localizedDate}
          </Typography>

          {/**Status (Reply-status and archived-status if archived) */}
          <Box className='report1' sx={{width: '35%'}}>
            {/**Reply-status*/}
            <Typography 
              display='inline'
              sx={{color: statusColor}}
            > 
              {statusMessage}
            </Typography>

            {/**Archived-status*/}
            {report[archivedRole] === 'true' && 
            <Typography display='inline'> 
              {` | ${t('report_is_archived')}`}
            </Typography>
            }
          </Box>
        
        </AccordionSummary>
        
        {/**Details open when clicked */}
        <AccordionDetails className={classes.details} >
          <Box className={classes.column}  sx={{borderTop: 1, borderColor: 'grey.500'}}>

            {/**Archive/Unarchive button according to archive-status*/}
            {(report[archivedRole] === 'true') ?
              /**UnArchiveButton */
              <Button 
                variant='outlined' 
               
                startIcon={<UnarchiveIcon />} 
                onClick= {handleUnarchive}
                sx={{
                  float: 'right', 
                  marginTop: '16px'
                }}
              >
                {t('report_unarchive')}
              </Button>
              :
              /**ArchiveButton */
              <Button 
              style={{border: '2px solid white', color: 'black', fontWeight: 'bold'}}
                variant='outlined' 
                startIcon={<ArchiveIcon style={{color: 'black'}}/>} 
                onClick= {handleArchive}
                sx={{
                  float: 'right', 
                  marginTop: '16px',
                  color: 'black', 
                  backgroundColor: '#F47D20',
                }}
              >
                {t('report_archive')}
              </Button>
            }   
            {/**Report Title */}
            <div>
              <Typography variant="body1" className={classes.body1}>
                 {t('report_title')}
              </Typography>
              <Typography variant="body2" className={classes.body2}>
                {report.title}
              </Typography>
            </div>
          
            {/*Reports recipient(s) information*/}
            <div style={{ marginTop: 16 }}>
              {/**Recipients info title. In plural if there is both business and agency as a recipient. */}
              <Typography variant="body1" className={classes.body1}>
                {(report.agency && report.business) 
                ? t('report_receiver_info_plural')
                : t('report_receiver_info')}
              </Typography>

              {(report.agency) && 
              /**Agency recipient info */
              <Box>
                <Typography display='inline' variant="body2" className={classes.body2}>
                  {t('agency')}: {" "}
                </Typography>
                <Typography 
                  display='inline'
                  sx={{color: 'secondary.main'}}
                > 
                  {report.agency.name}
                </Typography>
              </Box>}

              {(report.business) &&
              /**Business recipient info */
              <Box>
                <Typography display='inline' variant="body2" className={classes.body2}>
                  {t('business')}: {" "}
                </Typography>
                <Typography 
                  display='inline'
                  sx={{color: 'secondary.main'}}
                > 
                  {report.business.name}
                </Typography>
              </Box>}
            </div>
            
            {/*Agency and business get shown the reporters info   */}
            {(role === roles.Agency || role === roles.Business ) &&
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
            }

            {/**Time when reported and when happened in localized dates and time */}
            <div>
              <Typography variant="body1" className={classes.body1}>
                {t('report_time_reported')}
              </Typography>
              <Typography paragraph variant="body2" className={classes.body2}>
                {new Date(report.createdAt).toLocaleString()}
              </Typography>
              <Typography variant="body1" className={classes.body1}>
                {t('report_time_happened')}
              </Typography>
              <Typography paragraph variant="body2" className={classes.body2}>
                {new Date(report.date).toLocaleString()}
              </Typography>
            </div>

            {/**The actual report details. */}
            <div>
              <Typography variant="body1" className={classes.body1}>
                {t('report_details')}
              </Typography>
              
              {/**whiteSpace: 'pre-wrap' to preserve whitespace styling from the original report. */}
              <Typography paragraph variant="body2" className={classes.body2} sx={{whiteSpace: 'pre-wrap'}}>
                {report.details}
              </Typography>
            </div>
          </Box>
          {report.fileType !== '' &&
          /**If there is a file associated with the report, show that here. Image or video. */
          <Box className={classes.column} sx={{paddingBottom: '2em'}}>
            {report.fileType === 'image' && (
              <CardMedia
                component='img'
                className={classes.media}
                image={report.fileUrl ? report.fileUrl : banner}
                sx={{
                  marginTop: '2em',
                  border: 1,
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
          }

          {report.agencyReply && 
            /**Show agencys reply if it exists */
            <Box 
              sx={{
                borderTop: 1,
                borderColor: 'grey.500',
                paddingTop: '1em',
              }}
            >
              {/**Reply title with agency name*/}
              <Typography display='inline' variant="body1" className={classes.body1}>
                {t('report_reply_answer')} {t('report_from_agency')}: {' '}
              </Typography>
              <Typography 
                display='inline'
                sx={{color: 'secondary.main'}}
              > 
                {report.agency.name}
              </Typography>
              {/**Reply */}
              <Typography variant="body2" className={classes.body2} sx={{whiteSpace: 'pre-wrap', marginBottom: '1em'}}>
                { report.agencyReply }
              </Typography>
            </Box>
            }

          {report.businessReply && 
            /**Show businesses reply if it exists*/
            <Box 
              sx={{
                borderTop: 1,
                borderColor: 'grey.500',
                paddingTop: '1em',
              }}
            >
              {/**Reply title with business name*/}
              <Typography display='inline' variant="body1" className={classes.body1}>
                {t('report_reply_answer')} {t('report_from_business')}: {' '}
              </Typography>
              <Typography 
                display='inline'
                sx={{color: 'secondary.main'}}
              > 
                {report.business.name}
              </Typography>
              {/**Reply */}
              <Typography variant="body2" className={classes.body2} sx={{whiteSpace: 'pre-wrap', marginBottom: '1em'}}>
                { report.businessReply }
              </Typography>
            </Box>
            }
          {/*
            For agency and business users, if they have not replied to the report, show reply button.
          */}
          {((!report.agencyReply && role === roles.Agency) || (!report.businessReply && role === roles.Business )) && 
          <Button
            variant="contained"
            onClick={() => handleAnswer()}
            sx = {{
              marginTop: '1em',
              background: '#EB5A00',
              color: 'white',
            }}
          >
            {t('report_answer_button')}
          </Button>
          }
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
      color: '#CC4E00 !important',
    },
    body2: {
      marginTop: 8,
      color: theme.palette.text.secondary,
    },
  })
);

export default Report;

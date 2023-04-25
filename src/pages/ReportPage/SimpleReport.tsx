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
const SimpleReport: React.FC<any> = ({ report }) => {
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
          </Box>
        </AccordionSummary>
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

export default SimpleReport;

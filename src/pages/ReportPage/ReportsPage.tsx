import React, { SetStateAction, useEffect, useState } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from '@mui/material/Typography';
import { Box, Container, Fab, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import Report from './Report';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports, getMyReports, setReport } from '../../actions/reportActions';
import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { roles } from "../../types/types"
import { setFiles } from '../../actions/fileActions';
import { initialReport } from '../../reducers/reportReducer';

const ReportsPage: React.FC<any> = () => {
  const user: any = useSelector((state: any) => state.user);  
  const reports: any = useSelector((state: any) => state.report.reports);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const history = useHistory();

  enum displayState {
    All = 'all',
    Archived = 'archived',
    NotArchived = 'notArchived',
  }
  const [display, setDisplay] = useState(displayState.NotArchived)
  
  useEffect(() => {
    if (user.data.role === roles.Worker){
      dispatch(getMyReports());
    } else {
      dispatch(fetchReports());
    }
    
  }, [dispatch]);

  const handleNewReport = () => {
    dispatch(setReport(initialReport));
    dispatch(setFiles([null, null, null]))
    history.push('/report')
  }
  const compareFnByDateCreated = (reportA :any, reportB :any) => {
    return new Date(reportA.createdAt).getTime() - new Date(reportB.createdAt).getTime()
  }
  const compareFnByDateHappened = (reportA :any, reportB :any) => {
    return new Date(reportA.date).getTime() - new Date(reportB.date).getTime()
  }
  const getFilteredReports = () => {
    let archivedRole = ""
    switch(user.data.userType){
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
    switch(display){
      case displayState.All:
        return (
          [].concat(reports
            .sort(compareFnByDateCreated)
            .map((report: any) => (
              <Report key={report._id} report={report} />
          )))
        )
      case displayState.Archived:
        return (
          [].concat(reports
            .filter((report: any) => report[archivedRole] === 'true')
            .sort(compareFnByDateCreated)
            .map((report: any) => (
              <Report key={report._id} report={report} />
            )))
        )
      case displayState.NotArchived:
        return (
          [].concat(reports
          .filter((report: any) => report[archivedRole] === 'false')
          .sort(compareFnByDateCreated)
          .map((report: any) => (
            <Report key={report._id} report={report} />
          )))
        )
    }
  }
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid 
      container
      sx= {{ paddingTop: '1em', paddingBottom: '1em', justifyContent: 'space-between'}}
      >
        <Grid item>
          <Typography display='inline' variant="h4" color="primary" sx={{float: 'left', paddingRight: '1em'}}>
            {t("reports")}
          </Typography>
        
          {user.data.role === roles.Worker &&   
            <Fab size="medium" color="primary" aria-label="add" onClick={handleNewReport} sx={{float: 'left'}}>
              <Add />
            </Fab> 
          }
        </Grid> 

        <Grid item sx={{minWidth: '50px', float: 'right'}}>
          <FormControl fullWidth>
            <InputLabel id="display-select-label">{t('report_display_label')}</InputLabel>
            <Select
              labelId="display-select-label"
              id="display-select"
              value={display}
              label={t('report_display_label')}
              onChange={({target}) => setDisplay(target.value as SetStateAction<displayState>)}
            >
              <MenuItem value={displayState.All}>{t('report_display_all')}</MenuItem>
              <MenuItem value={displayState.Archived}>{t('report_display_archived')}</MenuItem>
              <MenuItem value={displayState.NotArchived}>{t('report_display_not_archived')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {reports.length ? (
        //Löytyy raportteja
        getFilteredReports()
      ) : (
        //Ei löydy raportteja
        user.data.role === roles.Worker ? (
          <Typography>{t('reports_you_have_no_reports')}</Typography>          
        ) : (
        <Typography>{t('reports_not_found')}</Typography>
        )
      )}
    </Container>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginTop: 10,
      paddingBottom: 20,
    },
  })
);
export default ReportsPage;

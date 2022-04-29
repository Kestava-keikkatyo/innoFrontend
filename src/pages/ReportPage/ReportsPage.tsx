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

  /**Enum for choosing which kind of reports to show */
  enum displayState {
    All = 'all',
    Archived = 'archived',
    NotArchived = 'notArchived',
  }
  /**Display state determines what kind of reports to show in reports pages list.
   * Default is not archived.
   */
  const [display, setDisplay] = useState(displayState.NotArchived)
  
  /**Get users reports on depending on user role. Worker gets their own sent reports
   * and others get reports sent to them.
   */
  useEffect(() => {
    if (user.data.role === roles.Worker){
      dispatch(getMyReports());
    } else {
      dispatch(fetchReports());
    }
    
  }, [dispatch]);

  /**Clear current report before redirecting to new report form */
  const handleNewReport = () => {
    dispatch(setReport(initialReport));
    dispatch(setFiles([null, null, null]))
    history.push('/report')
  }

  /**TODO: User should have a possibility to choose sorting method. Currentyl hardcoded. */

  /**Comparefunction for sorting reports. 
   * This one sorts by date report created. Newest on top. */
  const compareFnByDateCreated = (reportA :any, reportB :any) => {
    return new Date(reportB.createdAt).getTime() - new Date(reportA.createdAt).getTime()
  }

  /**Comparefunction for sorting reports. 
   * This one sorts by date when report event happened (chosen by the reporter).
   * Newest on top. */
  const compareFnByDateHappened = (reportA :any, reportB :any) => {
    return new Date(reportB.date).getTime() - new Date(reportA.date).getTime()
  }

  /**Returns the actual list of Report-components.
   * Filtered by chosen display-status. Currently archived, not archived or all.
   * Sorted by comparefunction from above.
   */
  const getFilteredReports = () => {
    /*
    Report has archived-status stored in different fields depending on the user role.
    Here we select the correct field name.
    */
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
    /**Filter reports differently according to display status */
    switch(display){
      case displayState.All:
        return (
          //Concat with empty array to create a new array for sorting.
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
      {/**Grid (row) for containing Reports page title, 
       * new report button (shown only for worker) and display state selection */} 
      <Grid 
      container
      sx= {{ paddingTop: '1em', paddingBottom: '1em', justifyContent: 'space-between'}}
      >
        <Grid item>
          {/**Reports page title */}
          <Typography display='inline' variant="h4" color="primary" sx={{float: 'left', paddingRight: '1em'}}>
            {t("reports")}
          </Typography>

          {/**New report button. Shown only for workers */}
          {user.data.role === roles.Worker &&   
            <Fab size="medium" color="primary" aria-label="add" onClick={handleNewReport} sx={{float: 'left'}}>
              <Add />
            </Fab> 
          }
        </Grid> 
        {/**Display state selection. A dropdown list using MUI Select */}
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
        /**Some reports exist so show them as a list of Report-components. */
        getFilteredReports()
      ) : (
        /**No reports found. Show different message according to user role. */
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

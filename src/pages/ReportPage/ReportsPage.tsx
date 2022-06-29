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
  enum sortingState {
    DateHappenedNewToOld = 'dateHappenedNewToOld',
    DateHappenedOldToNew = 'dateHappenedOldToNew',
    DateCreatedNewToOld = 'dateCreatedNewToOld',
    DateCreatedOldToNew = 'dateCreatedOldToNew',
    TitleAtoZ = 'titleAtoZ',
    TitleZtoA = 'titleZtoA',
    Replied = 'replied',
    RepliedReverse = 'repliedReverse',
  }
  /**Display state determines what kind of reports to show in reports pages list.
   * Default is not archived.
   */
  const [display, setDisplay] = useState(displayState.NotArchived)
  const [sorting, setSorting] = useState(sortingState.DateCreatedNewToOld)

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

  const compareFnByDateCreatedReversed = (reportA :any, reportB :any) => {
    return compareFnByDateCreated(reportB, reportA)
  }

  /**Comparefunction for sorting reports. 
   * This one sorts by date when report event happened (chosen by the reporter).
   * Newest on top. */
  const compareFnByDateHappened = (reportA :any, reportB :any) => {
    return new Date(reportB.date).getTime() - new Date(reportA.date).getTime()
  }

  const compareFnByDateHappenedReversed = (reportA :any, reportB :any) => {
    return compareFnByDateHappened(reportB, reportA)
  }

  const compareFnByTitle = (reportA :any, reportB :any) => {
    return reportA.title.localeCompare(reportB.title)
  }

  const compareFnByTitleReversed = (reportA :any, reportB :any) => {
    return compareFnByTitle(reportB,reportA)
  }

  const compareFnByReplied= (reportA :any, reportB :any) => {
    /** 0 = No one replied
     *  1 = partially replied
     *  2 = all replied
     */
    let aReply = -1;
    if (reportA.status ==='pending') {
      //Kukaan ei ole vastannut raporttiin
      aReply=0
    } else if (reportA.agency && reportA.business){
      //Raportilla on kaksi vastaanottajaa
      if (reportA.agencyReply && reportA.businessReply) {
        //Molemmat vastaanottajat ovat vastanneet
        aReply=2
      } else {
        //Vain toinen vastaanottaja on vastannut
        aReply=1
      }
    } else {
      //Raportilla on vain yksi vastaanottaja ja tämä on vastannut
      aReply=2
    }

    let bReply = -1;
    if (reportB.status ==='pending') {
      //Kukaan ei ole vastannut raporttiin
      bReply=0
    } else if (reportB.agency && reportB.business){
      //Raportilla on kaksi vastaanottajaa
      if (reportB.agencyReply && reportB.businessReply) {
        //Molemmat vastaanottajat ovat vastanneet
        bReply=2
      } else {
        //Vain toinen vastaanottaja on vastannut
        bReply=1
      }
    } else {
      //Raportilla on vain yksi vastaanottaja ja tämä on vastannut
      bReply=2
    }
    return (aReply - bReply)
  }

  const compareFnByRepliedReversed = (reportA :any, reportB :any) => {
    return compareFnByReplied(reportB, reportA)
  }

  /**Returns the actual list of Report-components.
   * Filtered by chosen display-status. Currently archived, not archived or all.
   * Sorted by comparefunction from above.
   */
  const getFilteredReports = () => {
    /**Select compare-function corresponding to user selection for report sorting. */
    let compareFn = null
    switch(sorting){
      case sortingState.DateCreatedNewToOld:
        compareFn = compareFnByDateCreated
      break;
      case sortingState.DateCreatedOldToNew:
        compareFn = compareFnByDateCreatedReversed
      break;
      case sortingState.DateHappenedNewToOld:
        compareFn = compareFnByDateHappened
      break;
      case sortingState.DateHappenedOldToNew:
        compareFn = compareFnByDateHappenedReversed
      break;
      case sortingState.TitleAtoZ:
        compareFn = compareFnByTitle
      break;
      case sortingState.TitleZtoA:
        compareFn = compareFnByTitleReversed
      break;
      case sortingState.Replied:
        compareFn = compareFnByReplied
      break;
      case sortingState.RepliedReverse:
        compareFn = compareFnByRepliedReversed
      break;
      default:
        compareFn = compareFnByDateCreated
      break;
    }
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
            .sort(compareFn)
            .map((report: any) => (
              <Report key={report._id} report={report} />
          )))
        )
      case displayState.Archived:
        return (
          [].concat(reports
            .filter((report: any) => report[archivedRole] === 'true')
            .sort(compareFn)
            .map((report: any) => (
              <Report key={report._id} report={report} />
            )))
        )
      case displayState.NotArchived:
        return (
          [].concat(reports
          .filter((report: any) => report[archivedRole] === 'false')
          .sort(compareFn)
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
        <Grid item style={{display: "flex", flexWrap: "wrap"}}>

          {/**Display state selection. A dropdown list using MUI Select */}
          <Box sx={{minWidth: '50px', marginRight: "1rem", marginTop: "1rem"}}>
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
          </Box>

          {/**Sorting state selection. A dropdown list using MUI Select */}
          <Box sx={{minWidth: '200px', marginTop: "1rem"}}>
            <FormControl fullWidth>
              <InputLabel id="sorting-select-label">{t('report_sort_label')}</InputLabel>
              <Select
                labelId="sorting-select-label"
                id="sorting-select"
                value={sorting}
                label={t('report_sort_label')}
                onChange={({target}) => setSorting(target.value as SetStateAction<sortingState>)}
              >
                <MenuItem value={sortingState.DateCreatedNewToOld}>{t('report_sort_date_created_new_to_old')}</MenuItem>
                <MenuItem value={sortingState.DateCreatedOldToNew}>{t('report_sort_date_created_new_to_old_reverse')}</MenuItem>
                <MenuItem value={sortingState.DateHappenedNewToOld}>{t('report_sort_date_happened_new_to_old')}</MenuItem>
                <MenuItem value={sortingState.DateHappenedOldToNew}>{t('report_sort_date_happened_new_to_old_reverse')}</MenuItem>
                <MenuItem value={sortingState.TitleAtoZ}>{t('report_sort_title')}</MenuItem>
                <MenuItem value={sortingState.TitleZtoA}>{t('report_sort_title_reverse')}</MenuItem>
                <MenuItem value={sortingState.Replied}>{t('report_sort_replied')}</MenuItem>
                <MenuItem value={sortingState.RepliedReverse}>{t('report_sort_replied_reverse')}</MenuItem>
              </Select>
            </FormControl>
          </Box>
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

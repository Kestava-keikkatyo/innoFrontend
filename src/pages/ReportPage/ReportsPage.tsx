import React, { useEffect } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from '@mui/material/Typography';
import { Box, Container, Fab, Grid } from '@mui/material';
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

  useEffect(() => {
    //TODO hae omat raportit jos worker
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

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid 
      container
      sx= {{ paddingTop: '1em', paddingBottom: '1em' }}
      >
        <Box sx={{ paddingRight: '2em' }}>
          <Typography variant="h4" color="primary">
            {t("reports")}
          </Typography>
        </Box>
        {user.data.role === roles.Worker ? (
          <Fab size="medium" color="primary" aria-label="add" onClick={handleNewReport}>
            <Add />
          </Fab>    
        ) : ('') }
      </Grid>
      {reports.length ? (
        reports.map((report: any) => (
          <Report key={report._id} report={report} />
        ))
      ) : (
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

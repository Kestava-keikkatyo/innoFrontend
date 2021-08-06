import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import Report from './Report';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../../actions/reportActions';

const ReportsPage: React.FC<any> = () => {
  const reports: any = useSelector((state: any) => state.report.reports);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h4" color="primary">
          Reports
        </Typography>
      </Box>
      {reports.length ? (
        reports.map((report: any) => (
          <Report key={report._id} report={report} />
        ))
      ) : (
        <div>No reports found</div>
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

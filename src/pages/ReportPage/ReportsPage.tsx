import React, { useEffect } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Report from './Report';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../../actions/reportActions';
import { useTranslation } from 'react-i18next'

const ReportsPage: React.FC<any> = () => {

  const reports: any = useSelector((state: any) => state.report.reports);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h4" color="primary">
          {t("reports")}
        </Typography>
      </Box>
      {reports.length ? (
        reports.map((report: any) => (
          <Report key={report._id} report={report} />
        ))
      ) : (
        <div>{t('reports_not_found')}</div>
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

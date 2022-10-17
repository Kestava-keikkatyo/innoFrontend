import React from 'react'
import { useSelector } from 'react-redux';
import PageLoading from '../../components/PageLoading';
import { Theme, useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import {
  Container,
  Divider,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      style={{
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',

      }}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

const RentalWorkModelPage = () => {
  const { data, ...user } = useSelector((state: any) => state.user);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  if (user.loading) {
    return <PageLoading />;
  }

  /* COMING SOON
  const getContent = () => {
    switch (data.role) {
      case roles.Admin:
        return <div>admin home </div>;
      case roles.Business:
        return <div>admin business </div>;;
      case roles.Agency:
        return <div>admin agency </div>;;
      case roles.Worker:
        return <WorkersRentalWorkModel />;
      default:
        return <></>;
    }
  };*/

  function a11yProps(index: any) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className="header">Overview</Typography>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >
          <Tab
            label={matches ? ' ' : t('rwm_responsibilities')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <BusinessIcon />
                </Tooltip>
              ) : (
                <BusinessIcon />
              )
            }
            {...a11yProps(0)}
          />
          <Tab
            label={matches ? ' ' : t('rwm_forms')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <BusinessIcon />
                </Tooltip>
              ) : (
                <BusinessIcon />
              )
            }
            {...a11yProps(1)}
          />
          <Tab
            label={matches ? ' ' : t('rwm_good_practices')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <BusinessIcon />
                </Tooltip>
              ) : (
                <BusinessIcon />
              )
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h1" color="secondary" className="header">
          {t('rwm_responsibilities')}
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography variant="h1" color="secondary" className="header">
          {t('rwm_forms')}
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography variant="h1" color="secondary" className="header">
          {t('rwm_good_practices')}
        </Typography>
      </TabPanel>
    </Container>
  );
}

export default RentalWorkModelPage;



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 8,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


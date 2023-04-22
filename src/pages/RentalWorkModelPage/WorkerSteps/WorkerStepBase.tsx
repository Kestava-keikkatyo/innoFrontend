import React from 'react'
import { useSelector } from 'react-redux';
import PageLoading from '../../../components/PageLoading';
import { Theme, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import {
  Container,
  Tooltip,
  useMediaQuery,
  Divider,
  Card,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';


interface WorkerStepBaseProps {
  content: Array<JSX.Element>
}

const WorkerStepBase = ({ content }: WorkerStepBaseProps) => {
  const { data, ...user } = useSelector((state: any) => state.user);
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const classes = useStyles();

  if (user.loading) {
    return <PageLoading />;
  }

  function a11yProps(index: number) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
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

  return (
    <Container maxWidth="xl" className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          TabIndicatorProps={{style: {background:'black'}}}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          style={{backgroundColor: '#C0CFFA', width: '100%', boxShadow: 'none'}}
          aria-label="scrollable force tabs example"
          centered
        >
         {/** <Tab
            label={matches ? ' ' : t('rwm_responsibilities')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <AccessibilityOutlinedIcon />
                </Tooltip>
              ) : (
                <AccessibilityOutlinedIcon />
              )
            }
            {...a11yProps(0)}
          />*/} 
          <Tab
            label={matches ? ' ' : t('rwm_forms')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <TaskOutlinedIcon />
                </Tooltip>
              ) : (
                <TaskOutlinedIcon />
              )
            }
            {...a11yProps(0)}
          />
          <Tab
            label={matches ? ' ' : t('rwm_good_practices')}
            icon={
              matches ? (
                <Tooltip title="Open" placement="top" arrow>
                  <GroupsOutlinedIcon />
                </Tooltip>
              ) : (
                <GroupsOutlinedIcon/>
              )
            }
            {...a11yProps(1)}
          />
        </Tabs>
        <Divider />
       {/**  <TabPanel value={value} index={0}>
          <Typography variant="h1" color="secondary" className="header">
            {t('rwm_responsibilities')}
          </Typography>
          <Typography variant="subtitle1">
            {content[0]}
          </Typography>
        </TabPanel>*/}
        <TabPanel value={value} index={0}>
          <Typography variant="subtitle1">
            {content[0]}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h1"  className="header" padding={2}>
            {t('rwm_good_practices')}
          </Typography>
          <Typography variant="subtitle1">
            {content[1]}
          </Typography>
        </TabPanel>
      </AppBar>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 32,
    padding: '0'
  },
}));

export default WorkerStepBase;

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Theme, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BusinessIcon from '@mui/icons-material/Business';
import {
  Container,
  Tooltip,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';

interface WorkerStepBaseProps {
  content: Array<JSX.Element>,
  handleCheckboxUpdate: (value: number, checked: boolean) => void
}

const WorkerStepBase = ({ content, handleCheckboxUpdate }: WorkerStepBaseProps) => {
  const curRentModel = useSelector((state: any) => state.currentRentalWorkModel);
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const classes = useStyles();

  console.log('RentalWorkModel:')
  console.log(curRentModel)

  function a11yProps(index: number) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const handleCheckbox = () => {
    handleCheckboxUpdate(value, !checked);
    setChecked(!checked);
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
        <Divider />
        <TabPanel value={value} index={0}>
          <Typography variant="h1" color="secondary" className="header">
            {t('rwm_responsibilities')}
          </Typography>
          <Typography variant="subtitle1">
            {content[0]}
          </Typography>
          <Box className={classes.flex}>
            <Checkbox checked={checked} onChange={handleCheckbox} />
            <Typography variant="subtitle1">
              {checked ? t('rwm_incomplete_step') : t('rwm_complete_step')}
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h1" color="secondary" className="header">
            {t('rwm_forms')}
          </Typography>
          <Typography variant="subtitle1">
            {content[1]}
          </Typography>
          <Box className={classes.flex}>
            <Checkbox checked={checked} onChange={handleCheckbox} />
            <Typography variant="subtitle1">
              {checked ? t('rwm_incomplete_step') : t('rwm_complete_step')}
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h1" color="secondary" className="header">
            {t('rwm_good_practices')}
          </Typography>
          <Typography variant="subtitle1">
            {content[2]}
          </Typography>
          <Box className={classes.flex}>
            <Checkbox checked={checked} onChange={handleCheckbox} />
            <Typography variant="subtitle1">
              {checked ? t('rwm_incomplete_step') : t('rwm_complete_step')}
            </Typography>
          </Box>
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
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default WorkerStepBase;

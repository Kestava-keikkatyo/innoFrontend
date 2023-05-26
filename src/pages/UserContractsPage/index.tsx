import React, { useEffect } from 'react';
import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import SendIcon from '@mui/icons-material/Send';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {
  Badge,
  Container,
  Divider,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEmploymentContractsAsWorkerOrBusiness
} from '../../actions/contractActions';
import { IRootState } from '../../utils/store';
import { useTranslation } from 'react-i18next';
import ContractsView from './ContractsView';
import { AddCircleOutline } from '@mui/icons-material';
import InvitationCodeInput from './InvitationCodeInput';
import { loadUser } from '../../utils/storage';

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

/**
 * @component
 * @description
 * Worker and Business view of business contracts (Agreements)
 *
 * - Displays business contracts (requested, pending, signed).
 * - Signs business contracts sent by Agencies.
 * - Sends contract requests to Agencies.
 * 
 * TODO: 
 * - Archiving old contracts.
 */
const UserContractsPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  
  const employmentContract: any = useSelector(
    (state: IRootState) => state.employmentAgreements['agreements']
  );

  const dispatch = useDispatch();
  const employmentContracts = employmentContract;
  const pending: any = [];
  const signed: any = [];

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsWorkerOrBusiness());
  }, [dispatch]);

  if (employmentContracts.length) {
    employmentContracts.map((contract: any) => {
      if ((loadUser().role === 'worker' && !contract.workerSigned) || (loadUser().role === 'business' && !contract.businessSigned)) {
        pending.push(contract)
      } else {
        signed.push(contract)
      }
    });
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      
      allVariants: {
        color: "black"
      },
    },
    
  });

  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth={false} className={classes.root}>
        <Typography variant="h6" style={{fontWeight: 'bold', marginBottom: '20px'}}>
           {t('contracts')}
          </Typography>
      <Divider />
      <AppBar style={{backgroundColor: '#C0CFFA', width: '100%', boxShadow: 'none'}} position="static" >
        <Tabs
          TabIndicatorProps={{style: {background:'black'}}}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="scrollable force tabs example"
        >
          <Tab
            className={classes.tab}
            label={matches ? ' ' : t('received_contracts')}
            icon={
              <Badge badgeContent={pending.length} color="secondary">
                {matches ? (
                  <Tooltip title="Received contracts" placement="top" arrow>
                    <NotificationsActiveIcon />
                  </Tooltip>
                ) : (
                  <NotificationsActiveIcon />
                )}
              </Badge>
            }
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label={matches ? ' ' : t('archived_contracts')}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Archived contracts" placement="top" arrow>
                    <AllInboxIcon />
                  </Tooltip>
                ) : (
                  <AllInboxIcon />
                )}
              </Badge>
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={matches ? ' ' : 'input invitation code'}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Invitation code" placement="top" arrow>
                    <AddCircleOutline />
                  </Tooltip>
                ) : (
                  <AddCircleOutline />
                )}
              </Badge>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <Divider />
      <TabPanel value={value} index={0}>
        <ContractsView view="pending" employmentContracts={pending} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContractsView view="signed" employmentContracts={signed} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InvitationCodeInput />
      </TabPanel>
    </Container>
    </ThemeProvider>
  );
};
export default UserContractsPage;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: 30,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  tab: {
    minWidth: '25%',
    maxWidth: '25%',
  },
}));
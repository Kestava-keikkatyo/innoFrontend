import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../../actions/userActions';
import { fetchBusinessContracts } from '../../actions/businessContractActions';
import PageLoading from '../../components/PageLoading';
import SearchTable from './SearchTable';
import ContractsTable from './ContractsTable';
import WorkerAndBusinessModal from './WorkerAndBusinessModal';
import {
  Container,
  Typography,
  Box,
  Tabs,
  AppBar,
  Tab,
  useTheme,
  Direction,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ContractsFromBusiness from './ContractsFromBusiness';
import { IRootState } from '../../utils/store';
import ContractsFromWorkers from './ContractsFromWorkers';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import { useTranslation } from 'react-i18next';
import { fetchFormList } from '../../actions/formListActions';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ReceivedContractsFromBusinesses from './ReceivedContractsFromBusinesses';
import ReceivedContractsFromWorkers from './ReceivedContractsFromWorkers';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir: Direction;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

/**
 * @component
 * @description
 * Agency view of Business contracts (Agreements)
 *
 * - Displays businesscontracts (requested, pending, signed).
 * - Sends businesscontracts to businesses and workers.
 * - TODO: Accepts businesscontract requests.
 *
 * After agency has sent businesscontract and business/worker has accepted it,
 * agency can create workcontracts between worker and business in workerpage.
 * Only workers/businesses that have accepted businesscontract with agency will be shown
 * in workerpage
 */
const ContractsPage = () => {
  const { data, ...user } = useSelector((state: any) => state.user);
  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [searchData, setSearchData] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    dispatch(me());
    dispatch(fetchBusinessContracts());
    dispatch(fetchFormList());
  }, [dispatch, data.role]);
  
  const openModal = (workerOrBusiness: any) => {
    setExpanded(false)
    setSearchData(workerOrBusiness);
    setDisplayModal(true);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleAccChange = 
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  if (user.loading) {
    return <PageLoading />;
  }
  return (
    // TODO: Menu on top of the site is not currently in use and could be removed in future.
    <Container maxWidth="lg" className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className={classes.tab}
            label={matches ? "" : t('own_contracts')}
            icon={
              matches ? (
                <Tooltip title="Omat sopimukset" placement="top" arrow>
                  <WorkIcon />
                </Tooltip>
              ) : (
                <WorkIcon />
              )
            }
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label={matches ? "" : t('arrived_contracts')}
            icon={
              matches ? (
                <Tooltip
                  //title="Käyttäjäyrityksiltä saapuneet sopimukset"
                  title="Saapuneet sopimukset"
                  placement="top"
                  arrow
                >
                  <BusinessIcon />
                </Tooltip>
              ) : (
                <BusinessIcon />
              )
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={matches ? "" : t('requests_of_contracts')}
            icon={
              matches ? (
                <Tooltip title="Sopimusten Pyynnöt" placement="top" arrow>
                  <GroupIcon />
                </Tooltip>
              ) : (
                <GroupIcon />
              )
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

{/* This TabPanel is currently where all actions happen */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Accordion 
          className={classes.card} 
          variant="outlined"
          defaultExpanded={false} 
          expanded={expanded === "panel"} 
          onChange={handleAccChange("panel")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography gutterBottom variant="h5">
              {t('make_contract')}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <SearchTable addWorkerOrBusiness={openModal} />
            <WorkerAndBusinessModal
              displayModal={displayModal}
              closeModal={() => setDisplayModal(false)}
              workerOrBusinessData={searchData}
              shrinkAccordion={() => handleAccChange("panel")}
            />
          </AccordionDetails>
        </Accordion>

        <Typography style={{ paddingTop: '1rem' }} variant="h4">
          {t('contracts_overview')}
        </Typography>
        <ContractsTable businessContract={businessContract} />
      </TabPanel>

{/* TabPanels below are to be removed, if no use. */}
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ContractsFromBusiness businessContract={businessContract} />
        <ContractsFromWorkers businessContract={businessContract} />
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <ReceivedContractsFromBusinesses businessContract={businessContract} />
        <ReceivedContractsFromWorkers businessContract={businessContract} />
      </TabPanel>
    </Container>
  );
};

export default ContractsPage;

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    borderRadius: 5,
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: '#6C6C6C',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
  },
  tab: {
    minWidth: '33.33%',
    maxWidth: '33.33%',
  },
}));

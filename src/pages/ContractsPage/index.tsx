import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { me } from '../../actions/userActions'
import { fetchBusinessContracts } from "../../actions/businessContractActions";
import PageLoading from '../../components/PageLoading'
import UserSearch from './UserSearch'
import SearchTable from './SearchTable'
import ContractsTable from './ContractsTable'
import ContractModal from './ContractModal'
import { Container, Typography, Divider, Card, CardContent, makeStyles, Box, Tabs, AppBar, Tab, useTheme, Direction } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import BusinessSendContracts from './BusinessSendContracts'
import WorkerSendContracts from './WorkerSendContracts'
import { IRootState } from '../../utils/store'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  dir: Direction
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "88em",
  },
  card: {
    width: "75em"
  },
  tab: {
    width: "75em"
  }
  
});

/**
 * @component
 * @description
 * - retrieves workers and businesses by name
 *
 * - Displays all the current businesscontracts, including pending ones (agency view, business view, worker view).
 * - Creates businesscontracts with businesses and workers (agency view).
 * - Accepts businesscontracts (worker view and business view).
 *
 * After agency has sent businesscontract and business/worker has accepted it,
 * agency can create workcontracts between worker and business in workerpage.
 * Only workers/businesses that have accepted businesscontract with agency will be shown
 * in workerpage
 */
const ContractsPage = () => {
  const { data, ...user } = useSelector((state: any) => state.user)
  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  )
  const dispatch = useDispatch()
  const classes = useStyles()
  const theme = useTheme()
  const [searchData, setSearchData] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)
  const [value, setValue] = useState(0);

  //to be switched to retrieve contracts
  useEffect(() => {
    dispatch(me(data.role))
    dispatch(fetchBusinessContracts())
  }, [dispatch, data.role])

  const openModal = (worker: any) => {
    setSearchData(worker)
    setDisplayModal(true)
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="default">
        <Tabs
          
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Omat sopimukset" {...a11yProps(0)} />
          <Tab label="Yritykseltä saapuneet sopimukset" {...a11yProps(1)} />
          <Tab label="Työntekijältä saapuneet sopimukset" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Paper square className={classes.root}>
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Typography style={{ paddingTop: '1rem' }} variant="h4" >
            Contracts
          </Typography>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Tee sopimus
              </Typography>
              <UserSearch />
              <Divider />
              <SearchTable
                addWorker={openModal} />
              <ContractModal
                displayModal={displayModal}
                closeModal={() => setDisplayModal(false)}
                workerData={searchData}
                forms={user.profile.forms}
              />
            </CardContent>
          </Card>
          <ContractsTable businessContract={businessContract}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BusinessSendContracts businessContract={businessContract}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <WorkerSendContracts businessContract={businessContract}/>
        </TabPanel>
        </Paper>
    </Container>
  )
}

export default ContractsPage
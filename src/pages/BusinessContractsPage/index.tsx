import React, { useEffect } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import BusinessIcon from '@mui/icons-material/Business'
import SendIcon from '@mui/icons-material/Send'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { Badge, Container, Divider, Tooltip, useMediaQuery } from '@mui/material'
import ListAccordionInBox from './ListAccordionInBox'
import ListAccordionWaiting from './ListAccordionWaiting'
import ListAccordionSent from './ListAccordionSent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContractsAsTarget } from '../../actions/contractActions'
import { IRootState } from '../../utils/store'
import AgenciesList from './AgenciesList'
import { useTranslation } from 'react-i18next'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      style={{
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
      }}
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
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
const BusinessContractsPage = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { t } = useTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  const { businessContract } = useSelector((state: IRootState) => state.businessContracts)
  const dispatch = useDispatch()
  const contracts = businessContract
  const pending: any = []
  const signed: any = []
  const sent: any = []

  const requested: any = []
  const fromAgencies: any = []
  const archived: any = []

  useEffect(() => {
    dispatch(fetchContractsAsTarget())
  }, [dispatch])

  if (contracts.length) {
    contracts.map((contract: any) => {
      if (contract.status === 'pending') {
        t('pending')
        pending.push(contract)
        fromAgencies.push(contract)
      } else if ((contract.status = t('request'))) {
        requested.push(contract)
      } else if ((contract.status = t('signed'))) {
        signed.push(contract)
        fromAgencies.push(contract)
      } else {
      }
      // an arrow function should return a value
      return ''
    })
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth='xl' className={classes.root}>
      <Divider />
      <AppBar position='static' color='transparent'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='primary'
          aria-label='scrollable force tabs example'
        >
          <Tab
            className={classes.tab}
            label={matches ? ' ' : t('search_agencies')}
            icon={
              matches ? (
                <Tooltip title='Selaa HP-yrityksiä' placement='top' arrow>
                  <BusinessIcon />
                </Tooltip>
              ) : (
                <BusinessIcon />
              )
            }
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            // label={matches ? ' ' : t('sent_contracts')}
            label={matches ? ' ' : t('requested_contracts')}
            icon={
              <Badge badgeContent={sent.length} color='secondary'>
                {matches ? (
                  <Tooltip title='Pyydetyt sopimukset' placement='top' arrow>
                    <SendIcon />
                  </Tooltip>
                ) : (
                  <SendIcon />
                )}
              </Badge>
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={matches ? ' ' : t('received_contracts')}
            icon={
              <Badge badgeContent={pending.length} color='secondary'>
                {matches ? (
                  <Tooltip title='Vastaanotetut sopimukset' placement='top' arrow>
                    <NotificationsActiveIcon />
                  </Tooltip>
                ) : (
                  <NotificationsActiveIcon />
                )}
              </Badge>
            }
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            label={matches ? ' ' : t('archived_contracts')}
            icon={
              <Badge badgeContent={archived.length} color='secondary'>
                {matches ? (
                  <Tooltip title='Arkistoidut sopimukset' placement='top' arrow>
                    <AllInboxIcon />
                  </Tooltip>
                ) : (
                  <AllInboxIcon />
                )}
              </Badge>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <Divider />
      <TabPanel value={value} index={0}>
        <AgenciesList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListAccordionSent contracts={requested} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListAccordionInBox contracts={fromAgencies} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ListAccordionWaiting contracts={archived} />
      </TabPanel>
    </Container>
  )
}
export default BusinessContractsPage

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
  tab: {
    minWidth: '25%',
    maxWidth: '25%',
  },
}))

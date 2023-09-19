import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { me } from '../../actions/userActions'
import { fetchEmploymentContractsAsAgency } from '../../actions/contractActions'
import PageLoading from '../../components/PageLoading'
import { Container, Box, useTheme, Direction, useMediaQuery, Link } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'
import EmploymentContractsTable from './EmploymentContractsTable'
import EmploymentTable from './Employment'

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
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={3} px={{ xs: 0, sm: 2 }}>
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

/**
 * @component
 * @description
 * Agency view of Business contracts (Agreements)
 *
 * - Displays businesscontracts (pending, signed).
 * - Sends businesscontracts to businesses and workers.
 *
 * After agency has sent businesscontract and business/worker has accepted it,
 * agency can create workcontracts between worker and business in workerpage.
 * Only workers/businesses that have accepted businesscontract with agency will be shown
 * in workerpage
 */
const AgencyContractsPage = () => {
  const { data, ...user } = useSelector((state: any) => state.user)
  const employmentContracts = useSelector((state: any) => state.employmentAgreements.agreements)

  const dispatch = useDispatch()
  const classes = useStyles()
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | false>(false)
  const [value, setValue] = useState(0)
  const { t } = useTranslation()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsAgency())
  }, [dispatch])

  if (user.loading) {
    return <PageLoading />
  }
  return (
    <Container maxWidth='lg' id='maxContainer' className={classes.root}>
      {/* This TabPanel is currently where all actions happen */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        <EmploymentTable />

        <EmploymentContractsTable employmentContracts={employmentContracts} />
      </TabPanel>
    </Container>
  )
}

export default AgencyContractsPage

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
  employmentHeader: {
    fontWeight: '400',
    fontSize: '1.75rem',
    lineHeight: '1.334',
    marginTop: '5%',
    marginBottom: '5%',
  },
}))

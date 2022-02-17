import React, { useEffect, useState } from "react"
import { Theme, useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar"
import {
  Badge,
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  Tooltip,
  useMediaQuery,
} from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../utils/store"
import allUsersService from "../../services/allUsersService"
import { useTranslation } from "react-i18next"
import { fetchWorkContracts } from "../../actions/workAddAction"
import ReceivedRequest from "./ReceivedRequest"
import CallReceivedIcon from "@mui/icons-material/CallReceived"
import CheckIcon from "@mui/icons-material/Check"
import TimelapseIcon from "@mui/icons-material/Timelapse"
import DarkModeIcon from "@mui/icons-material/DarkMode"
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
        borderLeft: "1px solid #ccc",
        borderRight: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      }}
      role="tabpanel"
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
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: 8,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  tab: {
    minWidth: "25%",
    maxWidth: "25%",
  },
}))

const AgencyGigOverview = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [agencyWorkers, setAgencyWorkers] = useState([])

  const { t } = useTranslation()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  const workContracts: any = useSelector(
    (state: IRootState) => state.workContracts
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWorkContracts())
  }, [dispatch])

  useEffect(() => {
    allUsersService.getAgencyWorkers().then((res: any) => {
      const agencyWorkers = res.data
      setAgencyWorkers(agencyWorkers)
    })
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  console.log("workContracts ", workContracts)

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Divider />
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            className={classes.tab}
            label={matches ? " " : t("received_work_requests")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Lähetetyt sopimukset" placement="top" arrow>
                    <CallReceivedIcon />
                  </Tooltip>
                ) : (
                  <CallReceivedIcon />
                )}
              </Badge>
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={t("accepted_work_requests")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Saapuneet sopimukset" placement="top" arrow>
                    <CheckIcon />
                  </Tooltip>
                ) : (
                  <CheckIcon />
                )}
              </Badge>
            }
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            label={matches ? " " : t("activeWork")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Odottavat sopimukset" placement="top" arrow>
                    <TimelapseIcon />
                  </Tooltip>
                ) : (
                  <TimelapseIcon />
                )}
              </Badge>
            }
            {...a11yProps(3)}
          />
          <Tab
            className={classes.tab}
            label={matches ? " " : t("endedWork")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Päättyneet työkeikat" placement="top" arrow>
                    <DarkModeIcon />
                  </Tooltip>
                ) : (
                  <DarkModeIcon />
                )}
              </Badge>
            }
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <Divider />
      <TabPanel value={value} index={0}>
        {" "}
        <ReceivedRequest
          workContracts={workContracts.workContracts}
          agencyWorkers={agencyWorkers}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {" "}
        aaaaa
      </TabPanel>
      <TabPanel value={value} index={2}>
        bbbbb
      </TabPanel>
      <TabPanel value={value} index={3}>
        ccccccc
      </TabPanel>
    </Container>
  )
}
export default AgencyGigOverview

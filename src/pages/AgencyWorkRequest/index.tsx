import React, { useEffect } from "react"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import SendIcon from "@material-ui/icons/Send"
import AllInboxIcon from "@material-ui/icons/AllInbox"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import {
  Accordion,
  AccordionDetails,
  Badge,
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core"

import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../utils/store"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"
import { useTranslation } from "react-i18next"
import AcceptedGigRequest from "./AcceptedGigRequest"
import { fetchWorkContracts } from "../../actions/workAddAction"
import ReceivedRequest from "./ReceivedRequest"

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

  const { t } = useTranslation()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const workContracts: any = useSelector(
    (state: IRootState) => state.workContracts
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWorkContracts())
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

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
            label={matches ? " " : "Saadut työkeikkapyynnöt"}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Lähetetyt sopimukset" placement="top" arrow>
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
            label="Hyväksytyt työkeikkapyynnöt"
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Saapuneet sopimukset" placement="top" arrow>
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
            label={matches ? " " : t("Aktiiviset työkeikat")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Odottavat sopimukset" placement="top" arrow>
                    <HourglassEmptyIcon />
                  </Tooltip>
                ) : (
                  <HourglassEmptyIcon />
                )}
              </Badge>
            }
            {...a11yProps(3)}
          />
          <Tab
            className={classes.tab}
            label={matches ? " " : t("Päättyneet työkeikat")}
            icon={
              <Badge color="secondary">
                {matches ? (
                  <Tooltip title="Päättyneet työkeikat" placement="top" arrow>
                    <AllInboxIcon />
                  </Tooltip>
                ) : (
                  <AllInboxIcon />
                )}
              </Badge>
            }
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <Divider />
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      {console.log("workContracts ", workContracts)}
      <ReceivedRequest workContracts={workContracts} />
    </Container>
  )
}
export default AgencyGigOverview

import React, { useEffect } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";
import SendIcon from "@material-ui/icons/Send";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Badge, Container, Tooltip, useMediaQuery } from "@material-ui/core";
import ListAccordionInBox from "./ListAccordionInBox";
import ListAccordionWaiting from "./ListAccordionWaiting";
import ListAccordionDone  from "./ListAccordionDone";
import ListAccordionSent from "./ListAccordionSent"
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinessContracts } from "../../actions/businessContractActions";
import { IRootState } from "../../utils/store";
import AgenciesList from "./AgenciesList";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  tab: {
    minWidth:"20%",
    maxWidth: "20%"
  }
}));

const BusinessContractsPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const dispatch = useDispatch()
  const contracts = businessContract
  const pending: any = []
  const waiting: any = []
  const ready: any = []
  const sent: any = []

  useEffect(() => {
    dispatch(fetchBusinessContracts())
  }, [dispatch]);

  contracts.map((contract: any) => {
    console.log(contract)
    if (contract.pendingContracts) {
      pending.push(contract)
    } else if (contract.requestContracts) {
      waiting.push(contract)
    } else if (contract.madeContracts) {
      ready.push(contract)
    } else if (contract.receivedContracts) {
      sent.push(contract)
      console.log(sent)
    } else {

    }
    // an arrow function should return a value
    return "";
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab className={classes.tab}
              label={matches ? " " : "Selaa HP-yrityksiä"}
              icon={
                matches ? <Tooltip title="Selaa HP-yrityksiä" placement="top" arrow><BusinessIcon/></Tooltip> : <BusinessIcon/>
              }
              {...a11yProps(0)}
            />
            <Tab className={classes.tab}
              label={matches ? " " : "Lähetetyt sopimukset"}
              icon={
              <Badge badgeContent={sent.length} color="secondary">
                {matches ? <Tooltip title="Lähetetyt sopimukset" placement="top" arrow><SendIcon/></Tooltip> : <SendIcon/>}
              </Badge>}
              {...a11yProps(1)}
            />
            <Tab className={classes.tab}
              label={matches ? " " : "Saapuneet sopimukset"}
              icon={
              <Badge badgeContent={pending.length} color="secondary">
                {matches ? <Tooltip title="Saapuneet sopimukset" placement="top" arrow><NotificationsActiveIcon/></Tooltip> : <NotificationsActiveIcon/>}
              </Badge>}
              {...a11yProps(2)}
            />
            <Tab className={classes.tab}
              label={matches ? " " : "Odottavat sopimukset"}
              icon={
              <Badge badgeContent={waiting.length} color="secondary">
                {matches ? <Tooltip title="Odottavat sopimukset" placement="top" arrow><HourglassEmptyIcon/></Tooltip> : <HourglassEmptyIcon/>}
              </Badge>}
              {...a11yProps(3)}
            />
            <Tab className={classes.tab}
              label={matches ? " " : "Valmiit sopimukset"}
              icon={
              <Badge badgeContent={ready.length} color="secondary">
                {matches ? <Tooltip title="Valmiit sopimukset" placement="top" arrow><AllInboxIcon/></Tooltip> : <AllInboxIcon/>}
              </Badge>}
              {...a11yProps(4)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AgenciesList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListAccordionSent contracts={sent}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListAccordionInBox contracts={pending} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ListAccordionWaiting contracts={waiting} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ListAccordionDone contracts={ready} />
        </TabPanel>
    </Container>
  );
};
export default BusinessContractsPage;

import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";
import SendIcon from "@material-ui/icons/Send";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Container } from "@material-ui/core";
import ListAccordionInBox from "./ListAccordionInBox";
import ListAccordionSent from "./ListAccordionSent";
import { ListAccordionDone } from "./ListAccordionDone";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinessContracts } from "../../actions/businessContractActions";
import { IRootState } from "../../utils/store";
import AgenciesList from "./AgenciesList";

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
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const BusinessContractsPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const dispatch = useDispatch();
  const contracts = businessContract;
  const pending: any = [];
  const sent: any = [];
  const ready: any = [];

  useEffect(() => {
    dispatch(fetchBusinessContracts());
  }, [dispatch]);

  contracts.map((contract: any) => {
    console.log(contract);
    if (contract.pendingContracts) {
      pending.push(contract);
    } else if (contract.requestContracts) {
      sent.push(contract);
    } else if (contract.madeContracts) {
      ready.push(contract);
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
            <Tab
              label="Selaa HP-yrityksiä"
              icon={<BusinessIcon />}
              {...a11yProps(0)}
            />
            <Tab
              label="Saapuneet sopimukset"
              icon={<NotificationsActiveIcon />}
              {...a11yProps(1)}
            />
            <Tab
              label="Lähetetyt sopimukset"
              icon={<SendIcon />}
              {...a11yProps(2)}
            />
            <Tab
              label="Valmiit sopimukset"
              icon={<AllInboxIcon />}
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AgenciesList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListAccordionInBox contracts={pending} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListAccordionSent contracts={sent} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ListAccordionDone contracts={ready} />
        </TabPanel>
    </Container>
  );
};
export default BusinessContractsPage;

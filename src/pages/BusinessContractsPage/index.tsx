import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SendIcon from "@material-ui/icons/Send";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import {
 
  Container,
} from "@material-ui/core";
import ListAccordionInBox from "./ListAccordionInBox";
import ListAccordionSent from "./ListAccordionSent";
import { ListAccordionDone } from "./ListAccordionDone";

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab
              label="Saapuneet sopimukset"
              icon={<NotificationsActiveIcon />}
              {...a11yProps(0)}
            />
            <Tab
              label="Lähetetyt sopimukset"
              icon={<SendIcon />}
              {...a11yProps(1)}
            />
            <Tab
              label="Valmiit sopimukset"
              icon={<AllInboxIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ListAccordionInBox />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListAccordionSent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListAccordionDone />
        </TabPanel>
      </div>
    </Container>
  );
};
export default BusinessContractsPage;

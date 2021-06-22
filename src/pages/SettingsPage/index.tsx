import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";
import ProfileGeneralInfo from "./ProfileGeneralInfo";
import { Container } from "@material-ui/core";
import UpdateProfileInfo from "./UpdateProfileInfo";
import ChangePassword from "./ChangePassword";
import UpdateProfilePic from "./UpdateProfilePic";

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
              label="Vaihda profiilikuva"
              {...a11yProps(0)}
            />
            <Tab
              label="Tiedot"         
              {...a11yProps(1)}
            />
            <Tab
              label="Vaihda salasana"
              {...a11yProps(2)}
            />
            <Tab
              label="Yleistä"
              {...a11yProps(3)}
            />
          
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <UpdateProfilePic/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UpdateProfileInfo/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ChangePassword/>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <ProfileGeneralInfo/>
        </TabPanel>
    </Container>
  );
};
export default BusinessContractsPage;

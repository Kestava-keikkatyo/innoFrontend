import React, { useEffect } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import { Container } from "@material-ui/core";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import LoopIcon from '@material-ui/icons/Loop';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AddWorkTask from "./AddWorkTask";
import ApplyingWorkers from "./ApplyingWorkers";
import CurrentRecruited from "./CurrentRecruited";
import EndedContracts from "./EndedContracts";
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
  tab: {
    minWidth: "25%",
    maxWidth: "25%",
  },
}));

const WorkOverview = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const theme = useTheme();

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
            className={classes.tab}
            label="Lisää työkeikka"
            icon={<AddIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label="Haussa"
            icon={<HourglassEmptyIcon />}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label="Meneillään olevat"
            icon={<LoopIcon />}
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            label="Päättyneet"
            icon={<EventBusyIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}> <AddWorkTask/></TabPanel>
      <TabPanel value={value} index={1}><ApplyingWorkers/></TabPanel>
      <TabPanel value={value} index={2}><CurrentRecruited/></TabPanel>
      <TabPanel value={value} index={3}><EndedContracts/></TabPanel>
    </Container>
  );
};
export default WorkOverview;

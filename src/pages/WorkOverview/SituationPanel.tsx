import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchingWorkers from "./SearchingWorkers";
import CurrentlyWorking from "./CurrentlyWorking";
import WorkingContractEnded from "./WorkingContractEnded";
import { SearchIcon } from "@material-ui/data-grid";
import { IconButton } from "@material-ui/core";
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
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  panel: {},
  search: {},
}));

const SituationPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h1>Omat työntekijät</h1>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Haussa" {...a11yProps(0)} className={classes.panel} />
          <Tab
            label="Työsuhteessa"
            {...a11yProps(1)}
            className={classes.panel}
          />
          <Tab label="Päättyneet" {...a11yProps(2)} className={classes.panel} />
        </Tabs>
      </AppBar>
      <div className={classes.search}>
        <TabPanel value={value} index={0}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
          <SearchingWorkers />
        </TabPanel>
      </div>
    </div>
  );
};

export default SituationPanel;

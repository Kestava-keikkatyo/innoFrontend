import React, { useState } from "react";
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Tabs,
  AppBar,
  Tab,
  useTheme,
  Direction,
  Grid,
  Button,
} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";

import { useTranslation } from 'react-i18next'

import { Accordion, AccordionDetails } from "@material-ui/core";

import JobRequest from "./JobRequest";
import WorkerTransferList from "./WorkerTransferList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir: Direction;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const ContractsPage: React.FC<any> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { t } = useTranslation()
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            onChange={handleChange}
            className={classes.tab}
            label={t("neededWork")}
            icon={<WorkIcon />}
            {...a11yProps(0)}
          />
          <Tab
            onChange={handleChange}
            className={classes.tab}
            label={t("activeWork")}
            icon={<BusinessIcon />}
            {...a11yProps(1)}
          />
          <Tab
            onChange={handleChange}
            className={classes.tab}
            label={t("endedWork")}
            icon={<GroupIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Accordion className={classes.card} variant="outlined">
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Container>
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <JobRequest />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Typography variant="h6">Valitse Työntekijät</Typography>
              <WorkerTransferList />
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              {t('add_active')}
            </Button>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Typography style={{ paddingTop: "1rem" }} variant="h4"></Typography>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
    </Container>
  );
};

export default ContractsPage;

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    borderRadius: 5,
  },
  accordion: {
    width: "100%",
    marginTop: 12,
    border: "1px solid #E0E0E0",
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: "#6C6C6C",
  },
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: "33.33%",
    maxWidth: "33.33%",
  },
  button: {
    marginTop: "5%",
  },
}));

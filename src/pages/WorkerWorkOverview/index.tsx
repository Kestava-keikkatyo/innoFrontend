import React, { useState } from "react";
import { Container, Typography, Box, Tabs, AppBar, Tab, useTheme, Direction } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import WorkIcon from "@mui/icons-material/Work";
import AnnouncementIcon from "@mui/icons-material/Announcement";
// import { Accordion, AccordionDetails } from "@mui/material";
import WorkView from "./WorkView";
import WorkRequest from "./WorkRequest";
import { useTranslation } from 'react-i18next'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir: Direction;
}

const works = [
  {
    startdate: "03/10/2021",
    enddate: "05/10/2021",
    status: "active",
    contract_id: "contract_id",
    company_name: "Emminkäinen",
    title: "Nakkikioskinmyyjä",
    contact: "Erkki P. +358 12312312"
  },   {
    startdate: "03/12/2021",
    enddate: "05/12/2021",
    status: "active",
    contract_id: "contract_id",
    company_name: "Losti",
    title: "Kebabmyyjä",
    contact: "Erkki P. +358 12312312"

  },   {
    startdate: "03/10/2021",
    enddate: "05/10/2021",
    status: "done",
    contract_id: "contract_id",
    company_name: "Biskars",
    title: "Historia Nakkikioskinmyyjä",
    contact: "Erkki P. +358 12312312"
  }
]


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

const WorkerJobs = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: any): void => {
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
            className={classes.tab}
            label={t("jobs")}
            icon={<WorkIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label={t("work_request")}
            icon={<AnnouncementIcon />}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <WorkView works={works}/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Typography style={{ paddingTop: "1rem" }} variant="h4"></Typography>
        <WorkRequest/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
    </Container>
  );
};

export default WorkerJobs;

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
    minWidth: "50%",
    maxWidth: "50%",
  },
}));

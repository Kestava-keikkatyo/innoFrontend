import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import CreateJob from './CreateJob';
import CreatedJobs from './CreatedJobs';

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
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
    >
      {value === index && (
        <Box sx={{
          padding: {
            xs: '20px 0px',
            sm: '40px 20px'
          }
        }}>
          {children}
        </Box>
        )}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const CompanyJobPage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
  <Container>
    <AppBar position="static" color="transparent">
      <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="fullWidth"
      aria-label="full width tabs example"
      >
      <Tab label="Add new job" {...a11yProps(0)} />
      <Tab label="Your jobs" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <CreateJob />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <CreatedJobs />
    </TabPanel>
  </Container>
  );
};

export default CompanyJobPage;

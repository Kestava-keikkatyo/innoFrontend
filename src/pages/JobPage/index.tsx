import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import CreateJob from './CreateJob';
import CreatedJobs from './CreatedJobs';
import { generatePath, useHistory, useLocation, useParams } from 'react-router-dom';

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
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function useQuery() : URLSearchParams {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const CompanyJobPage: React.FC<any> = () => {
  const theme = useTheme();
  const history = useHistory();
  const query = useQuery();
  const [value, setValue] = React.useState(query.get('tab') || 'create');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push({
      pathname: history.location.pathname,
      search: "?" + new URLSearchParams({tab: newValue}).toString()
  })
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
      <Tab label="Add new job" value="create" {...a11yProps(0)} />
      <Tab label="Your jobs" value="my" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index="create">
      <CreateJob />
    </TabPanel>
    <TabPanel value={value} index="my">
      <CreatedJobs />
    </TabPanel>
  </Container>
  );
};

export default CompanyJobPage;
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Fab,
  Typography,
  Container,
  Tab,
  Tabs,
  Grid,
  Theme,
} from '@material-ui/core'
import { AddIcon } from '@material-ui/data-grid'
import { fetchFormList } from '../../actions/formListActions'
import Spacing from '../../components/Spacing'
import { useDispatch } from 'react-redux'

import {Card, CardContent, makeStyles, Box, AppBar } from '@material-ui/core'

import MyFormsTable from './MyFormsTable'
import CommonFormsTable from './CommonFormsTable'
import CommunityFormsTable from './CommunityFormsTable'



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
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: "100%",
  },
}));

/**
 * @component
 * @desc This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
 * @todo OnHover preview, pip for every node? So onMouseEnter renders an image(?) of the finished pdf(?)
 */
const FormsPage: React.FC = () => {


  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //add communityForms
  //const { myForms } = useSelector((state: any) => state.formList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFormList())
  }, [dispatch])

  /* <div className="form-banner-filter"> */
  return (
    <Container className="relative">
      <div className="form-banner" style={{ height: '200px'}} />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-end"
        className="form-search-container"
        style={{ height: '200px', paddingBottom: '50px' }}
      >
      </Grid>
      <div className="new-form-btn">
        <Link to="/forms/newform">
          <Fab size="medium" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>

      <div className={classes.root}>
        <AppBar color='default'  position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
            <Tab value="one" label="My Forms" wrapped {...a11yProps('one')} />
            <Tab value="two" label="Common" {...a11yProps('two')} />
            <Tab value="three" label="Community" {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
            My Forms
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <MyFormsTable/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="two">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
            Common Forms
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <CommonFormsTable/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="three">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
            Community Forms
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <CommunityFormsTable/>
            </CardContent>
          </Card>
        </TabPanel>
      </div>


      <Spacing m5 />

    </Container>
  )
}

export default FormsPage

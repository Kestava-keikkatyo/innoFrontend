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
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { fetchFormList } from '../../actions/formListActions'
import Spacing from '../../components/Spacing'
import { useDispatch } from 'react-redux'

import { Card, CardContent, Box, AppBar } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import MyFormsTable from './MyFormsTable'
import CommonFormsTable from './CommonFormsTable'
import CommunityFormsTable from './CommunityFormsTable'

import { useTranslation } from 'react-i18next'

import formServices from '../../services/formServices';
import Form from './Form';
import ReactDOMServer from 'react-dom/server';
//@ts-ignore @TODO fix this ts-ignore
import * as html2pdf from 'html2pdf.js';

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

  const { t } = useTranslation()
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const handleDownload = async (formId: any) => {
    /**Get form data from database. */
    let form: any = await formServices.fetchFormById(formId);
    
    /**Generate Form-component from form data. Form-component is used 
     * specifically for PDF-conversion. Then render Form-component to string for html2pdf. */
    let content = ReactDOMServer.renderToString(<Form currentForm={form} />)

    //Set options for html2pdf conversion
    let options = {
      margin: [96,96,96,96], //[top, right, bottom, left]
      filename: form.title ? `${form.title}.pdf` : "UnknownForm.pdf",
      image: { type: 'jpeg', quality: 0.90 },
      html2canvas: { 
        scale: 2,
        logging: false,
      },
      /**Avoids page-break that splits elements with class name .avoid_pagebreak,
       * which is included in every question-element in Form-component.
       */
      pagebreak: { avoid: '.avoid_pagebreak' }, 
      jsPDF: {
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
      },
    }

    //Create the PDF from string content with selected options.
    html2pdf()
      .set(options)
      .from(content)
      .save()
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
      <Box 
        className="form-banner" 
        sx={{ 
          height: '200px',
          display: {
            xs: 'none', //Hide banner picture in extra small displays. (Cell phones)
            sm: 'flex',
          }
        }} 
      />
      
      {/**This grid is still needed to avoid bannerpicture from getting
       * squashed to top under nav bar.
       */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        className="form-search-container"
        sx={{ 
          height: '200px',
          display: {
            xs: 'none',
            sm: 'flex',
          }
        }} 
      >
      </Grid>
      {/**Link to new form... form. */}
      <div className="new-form-btn">
        <Link to="/forms/newform">
          <Fab size="medium" color="primary" aria-label="add">
            <Add />
          </Fab>
        </Link>
      </div>

      <div className={classes.root}>
        <AppBar color='default'  position="static" >
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" >
            <Tab value="one" label={t("my_forms")} wrapped {...a11yProps('one')} />
            <Tab value="two" label={t("common")} {...a11yProps('two')} />
            <Tab value="three" label={t("community")} {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h1" className="header"   >
          {t("my_forms")}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <MyFormsTable handleDownload={handleDownload}/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="two">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h1" className="header" >
        {t("common_forms")}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <CommonFormsTable handleDownload={handleDownload}/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="three">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h1" className="header" >
        {t("community_forms")}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <CommunityFormsTable handleDownload={handleDownload}/>
            </CardContent>
          </Card>
        </TabPanel>
      </div>


      <Spacing m5 />

    </Container>
  );
}

export default FormsPage

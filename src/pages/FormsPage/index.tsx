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
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import Form from './Form';
import ReactDOMServer from 'react-dom/server';
import { jsPDF } from "jspdf";

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

  const { t } = useTranslation()
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const handleDownload = async (formId: any) => {
    let form: any = await formServices.fetchFormById(formId);
    console.log('handleDownload - form: ', form);
    /*
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf content
    let content: any = [];

    let html = ReactDOMServer.renderToString(<Form currentForm={form} />);
    let htmlForm: any = htmlToPdfmake(html);
    console.log('handleDownload - html: ', html);
    console.log('handleDownload - htmlForm: ', htmlForm);

    content.push(htmlForm);

    // pdf document
    var doc = {
      content: content,
    };

    pdfMake.createPdf(doc).download(form.title);
    */
    let doc = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'a4',
      hotfixes: ['px_scaling'],
    });
    
    let pdfMargin = [30,30,30,30] //[top, right, bottom, left]
    let contentWidth = doc.internal.pageSize.getWidth() - pdfMargin[1] - pdfMargin[3]
    let html = ReactDOMServer.renderToString(<div style={{width: `${contentWidth}px`}} ><Form currentForm={form} /></div>)
    
   
    console.log('pagewidth: ',doc.internal.pageSize.getWidth())

    await doc.html(html, {
      autoPaging: true,
      margin: pdfMargin,
      //x: 30,
      //y: 30,
      html2canvas: {
        //scale: 0.3,
        //width: doc.internal.pageSize.getWidth(),
        //windowWidth: doc.internal.pageSize.getWidth(),
        
      },
      
    });
    console.log('save')
    
    doc.save(form.title ? `${form.title}.pdf` : "UnknownForm.pdf" );
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
        justifyContent="space-evenly"
        alignItems="flex-end"
        className="form-search-container"
        style={{ height: '200px', paddingBottom: '50px' }}
      >
      </Grid>
      <div className="new-form-btn">
        <Link to="/forms/newform">
          <Fab size="medium" color="primary" aria-label="add">
            <Add />
          </Fab>
        </Link>
      </div>

      <div className={classes.root}>
        <AppBar color='default'  position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
            <Tab value="one" label={t("my_forms")} wrapped {...a11yProps('one')} />
            <Tab value="two" label={t("common")} {...a11yProps('two')} />
            <Tab value="three" label={t("community")} {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
          {t("my_forms")}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <MyFormsTable handleDownload={handleDownload}/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="two">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
        {t("common_forms")}
          </Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent >
              <CommonFormsTable handleDownload={handleDownload}/>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index="three">
        <Typography  style={{ paddingTop: '1rem', paddingBottom: '1rem' }} variant="h4"  >
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

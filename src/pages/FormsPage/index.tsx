import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Fab,
  Typography,
  Tab,
  Tabs,
  Grid,
  Theme,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { fetchFormList } from '../../actions/formListActions'
import Spacing from '../../components/Spacing'
import { useDispatch } from 'react-redux'
import { Card, CardContent, Box, AppBar } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import logo from '../../assets/pictures/Tietopankki_yläpalkki_kuvitus.svg'
import MyFormsTable from './MyFormsTable'
import CommonFormsTable from './CommonFormsTable'
import CommunityFormsTable from './CommunityFormsTable'
import { useTranslation } from 'react-i18next'
import ImageUploader from '../../components/ImageUploader';
import { ImageUpload } from '../../pages/FormsPage/ImageUpload';
import formServices from '../../services/formServices';
import Form from './Form';
import ReactDOMServer from 'react-dom/server';
//@ts-ignore @TODO fix this ts-ignore
import * as html2pdf from 'html2pdf.js';
import ImageUploading, { ImageListType } from "react-images-uploading";

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
    backgroundColor: "#FDFDFD",
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

  const [file, setFile] = useState();
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
      margin: [96, 96, 96, 96], //[top, right, bottom, left]
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

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: "black"
      },
    },
  });

  /* <div className="form-banner-filter"> */
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ padding: '20px' }} className="relative">

        {/**This grid is still needed to avoid bannerpicture from getting
       * squashed to top under nav bar.
       */}
        {/** <Grid
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
        <img style={{width: '20%'}} src={logo}></img>
      </Grid> **/}

        <div style={{ width: '100%' }} className={classes.root}>
          <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold' }} >
            {t('forms')}
          </Typography>
          <div style={{border: '2px solid orange'}}>
          <AppBar style={{ backgroundColor: '#C0CFFA', width: '100%', boxShadow: 'none' }} position="static" >
            <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={value} onChange={handleChange}  >
              <Tab sx={{ fontSize: { xs: '10px', sm: '20px', lg: '20px' } }} style={{  borderRight: '2px solid white', backgroundColor: '#C0CFFA', fontWeight: 'bold', color: 'black', textTransform: 'capitalize' }} value="one" label={t("materials")} wrapped {...a11yProps('one')} />
              <Tab sx={{ fontSize: { xs: '10px', sm: '20px', lg: '20px' } }} style={{  borderRight: '2px solid white', backgroundColor: '#C0CFFA', fontWeight: 'bold', color: 'black', textTransform: 'capitalize' }} value="two" label={t("common")} {...a11yProps('two')} />
              <Tab sx={{ fontSize: { xs: '10px', sm: '20px', lg: '20px' } }} style={{  borderRight: '2px solid white', backgroundColor: '#C0CFFA', fontWeight: 'bold', color: 'black', textTransform: 'capitalize' }} value="three" label={t("community")} {...a11yProps('three')} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index="one">
            <div style={{ display: 'flex' }} className="new-form-btn">
              <Typography style={{ paddingTop: '0.5rem', paddingBottom: '0rem', marginRight: '20px', fontSize: '20px', fontWeight: 'bold' }}    >
                {t("my_forms")}
              </Typography>
              {/**Link to new form... form. */}
              <Link style={{ marginRight: '20px' }} to="/forms/newform" aria-label='add'>
                <Fab size="medium" color="primary" aria-label="add">
                  <Add />
                </Fab>
              </Link>
            </div>
            <Card className={classes.card} variant="outlined">
              <CardContent >
                <MyFormsTable handleDownload={handleDownload} />
              </CardContent>
            </Card>
            <ImageUpload></ImageUpload>
          </TabPanel>
          <TabPanel value={value} index="two" >
            <Typography style={{ paddingTop: '1rem', paddingBottom: '1rem', fontSize: '20px', fontWeight: 'bold' }}  >
              {t("common_forms")}
            </Typography>
            <Card className={classes.card} variant="outlined">
              <CardContent >
                <CommonFormsTable handleDownload={handleDownload} />
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={value} index="three">
            <Typography style={{ paddingTop: '1rem', paddingBottom: '1rem', fontSize: '20px', fontWeight: 'bold' }}  >
              {t("community_forms")}
            </Typography>
            <Card className={classes.card} variant="outlined">
              <CardContent >
                <CommunityFormsTable handleDownload={handleDownload} />
              </CardContent>
            </Card>
          </TabPanel>
          </div>
        </div>
        <Spacing m5 />
      </Grid >
    </ThemeProvider>
  );
}

export default FormsPage

import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography'
import LifelineCard from './LifelineCard'
import lifeline from '../../assets/tietopankki/elinkaari.json'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import Ingressi from '../../components/Ingressi';
import { Grid } from '@mui/material';
import image1 from '../../assets/pictures/vtm_A_vuokratyonvaiheet_01.png'
import image2 from '../../assets/pictures/vtm_A_vuokratyonvaiheet_02.png'
import image3 from '../../assets/pictures/vtm_A_vuokratyonvaiheet_03.png'
import image4 from '../../assets/pictures/vtm_A_vuokratyonvaiheet_04.png'
import image5 from '../../assets/pictures/vtm_A_vuokratyonvaiheet_05.png'
import form1 from '../../assets/forms/form1.pdf'
import form2 from '../../assets/forms/form2.pdf'
import form3 from '../../assets/forms/form3.pdf'
import form4 from '../../assets/forms/form4.pdf'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  }
}))

function getSteps() {
  return lifeline.map((e) => e.title)
}

const getStepContent = (step: any) => <LifelineCard step={lifeline[step]} />


const JobLifeline = () => {

  const { t } = useTranslation()
  const classes = useStyles()
  const steps = getSteps()

  const ingressi_header = "stages_of_work"
  const summary = "stages_of_work_summary"
 
  const images = [image1, image2, image3, image4, image5];
  const forms = [form1, form2, form3, form4, form4];
  const form_names = [t("form1Header"), t(""), t("form2Header"), t("form3Header"), t("form4Header")];

  return (
    <div className={classes.root}>
      <Ingressi header={ingressi_header} summary={summary}></Ingressi>

      <Grid sx={{ width: { xs: '90%', md: '60%' } }} style={{ margin: 'auto', marginBottom: '20px' }} >
        {steps.map((label, index) => (

          <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'row', sm: 'column' } }} style={{ margin: '0', flexWrap: 'nowrap', marginBottom: '20px', width: '100%', justifyContent: 'center' }} key={label}>
            <Grid style={{ backgroundColor: "#DBE4FC", paddingBottom: '20px' }} item xs={12} sm={12} md={3}>
          
              <img style={{width: '200px'}} src={images[index]}></img>
            </Grid>
            <Grid style={{ backgroundColor: "#DBE4FC", paddingBottom: '20px' }} item xs={12} sm={12} md={9}>
              <Typography style={{ fontWeight: 'bold', marginBottom: '20px' }} className='header2'>{label}</Typography>
              <Typography style={{ display: "center", justifyContent: 'center' }}>
                {getStepContent(index)}
              </Typography>
              <Typography style={{fontWeight: 'bold', color: "black"}}><a className="one" href = {forms[index]} target = "_blank">{form_names[index]}</a></Typography>
            </Grid>
          </Grid>
  
        ))}
      </Grid>
      <Footer />
    </div>
  )
}
export default JobLifeline

{/*import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LifelineCard from './LifelineCard'
import lifeline from '../../assets/tietopankki/elinkaari.json'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer';
import Ingressi from '../../components/Ingressi';
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  }
}))

function getSteps() {
  return lifeline.map((e) => e.title)
}

const getStepContent = (step: any) => <LifelineCard step={lifeline[step]} />

const JobLifeline = () => {

  const { t } = useTranslation()
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const ingressi_header = "stages_of_work"
  const summary = "stages_of_work_summary"

  return (
    <div className={classes.root}>

  
      <Ingressi header={ingressi_header} summary={summary}></Ingressi>
      
      <Container maxWidth={false} style={{ backgroundColor: "#DBE4FC", width: "100%", display: "center", justifyContent: 'center' }}>
        <Stepper sx={{ width: { xs: '90%', md: '60%' } }} style={{ margin: 'auto' }} activeStep={activeStep} orientation="vertical" >
          {steps.map((label, index) => (
            <Step style={{ backgroundColor: "#DBE4FC" }} key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent style={{ display: "center", justifyContent: 'center' }}>
                {getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>{t('steps_completed')}</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </Container>
      <Footer></Footer>
    </div>
  )
}
export default JobLifeline*/}
import React, { useState } from 'react'

import {
  Card,
  Paper,
  FormControlLabel,
  Grid,
  Container,
  Checkbox,
  Typography,
  useTheme,
  MobileStepper,
  Button,
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const ProcessPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkedBoxes, setCheckedBoxes] = useState(0)
  const [introductionStep, setIntroductionStep] = useState(1)
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    setCheckedBoxes(checkedBoxes + 1)
  }

  const handleNext = () => {
    if (activeStep < 5) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setCheckedBoxes(0)
      setIntroductionStep(introductionStep + 1)
      setState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
      })
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    setIntroductionStep(introductionStep - 1)
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 1200,
      flexGrow: 1,
    },
    container: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  })

  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <Card variant='outlined'>
        <Paper elevation={5} style={{ padding: '5em' }} className='paper-container'>
          <Typography variant='h6'>Perehdytys {introductionStep}/6</Typography>
          <Container className={classes.container}>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedA} onChange={handleChange} name='checkedA' />
                }
                label='Olen tutustunut ...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedB} onChange={handleChange} name='checkedB' />
                }
                label='Olen selvillä ...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedC} onChange={handleChange} name='checkedC' />
                }
                label='Olen tutustunut ...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedD} onChange={handleChange} name='checkedD' />
                }
                label='Olen selvillä ...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedE} onChange={handleChange} name='checkedE' />
                }
                label='Olen tutustunut...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedF} onChange={handleChange} name='checkedF' />
                }
                label='Olen selvillä...'
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={state.checkedG} onChange={handleChange} name='checkedG' />
                }
                label='Olen tutustunut...'
              />
            </Grid>
          </Container>
          <MobileStepper
            variant='progress'
            steps={6}
            position='static'
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={checkedBoxes < 7 || introductionStep === 6}
              >
                Seuraava
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Takaisin
              </Button>
            }
          />
        </Paper>
      </Card>
    </>
  )
}

export default ProcessPage

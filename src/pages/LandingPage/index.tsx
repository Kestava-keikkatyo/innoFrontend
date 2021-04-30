import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
  CardActions,
  Button,
  CardHeader,
  MobileStepper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Spacing from '../../components/Spacing'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

const WhiteTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography)

const SimpleList = () => (
  <>
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  </>
)

const CustomCard = () => (
  <Card>
    <CardHeader></CardHeader>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">
        be{}nev{}o{}lent
      </Typography>
      <Typography color="textSecondary">adjective</Typography>
      <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Button>Luo tili</Button>
      <Button>Kirjaudu sisään</Button>
    </CardActions>
  </Card>
)

const LandingPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step: any) => {
    setActiveStep(step)
  }
  return (
    <div>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className="landing-stepper"
        nextButton={
          <Button size="small" disabled={activeStep === 3}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="swipable-card-container"
      >
        <Grid item xs={12} className="landing-part1">
          <div className="landing-banner" />
        </Grid>
        <Grid container className="landing-part2">
          <Grid item xs={12} md={6}>
            Part1
          </Grid>
          <Grid item xs={12} md={6} className="bg-white">
            Part2
          </Grid>
        </Grid>
        <Grid container className="landing-part3">
          <Grid item xs={12} className="landing-title-container">
            <Typography variant="h4" color="secondary">
              Vastuualueet
            </Typography>
            <Button variant="contained" color="secondary">
              Lue lisää
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            Part3
          </Grid>
          <Grid item xs={12} md={6}>
            Part4
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          justify="flex-start"
          className="landing-part4"
        >
          <Grid item xs={12} className="landing-part41 bg-white">
            <Grid container>
              <Grid item xs={4}>
                <Spacing m5 p5>
                  <Typography>Oletko työntekijä?</Typography>
                  <CustomCard />
                </Spacing>
              </Grid>
              <Grid item xs={4}>
                <Spacing m5 p5>
                  <Typography>Oletko käyttäjäyritys?</Typography>
                  <CustomCard />
                </Spacing>
              </Grid>
              <Grid item xs={4}>
                <Spacing m5 p5>
                  <Typography>Oletko vuokratyöfirma?</Typography>
                  <CustomCard />
                </Spacing>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="landing-part42">
            <Grid container>
              <Grid xs={3} item>
                <SimpleList />
              </Grid>
              <Grid xs={3} item>
                <SimpleList />
              </Grid>
              <Grid xs={3} item>
                <SimpleList />
              </Grid>
              <Grid xs={3} item>
                <SimpleList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwipeableViews>
    </div>
  )
}
export default LandingPage

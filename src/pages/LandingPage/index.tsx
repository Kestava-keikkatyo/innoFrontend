import React from 'react'
import { Card, CardContent, Grid, Typography, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import logo from '../../assets/keikka-kaveri4.png'

const WhiteTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography)

const LandingPage = () => {
  return (
    <div>
      <div className="landing-banner" />
      <div className="blank">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={10}
        >
          <Grid item xs={6} >
            <Paper
              className="text-card text-white"
              elevation={3}
              style={{ backgroundColor: '#0007' }}
            >
              <WhiteTypography align="center" variant="h1" gutterBottom>
                {'KeikkaKaveri'}
              </WhiteTypography>
              <WhiteTypography variant="h4" gutterBottom>
                {'Kun henkilöstö voi hyvin, työ sujuu.'}
              </WhiteTypography>
              <WhiteTypography variant="h5" gutterBottom>
                {
                  'KeikkaKaveri tarjoaa tietoa, koulutusta ja välineitä turvallisten ja terveellisten työolojen kehittämiseen ja ylläpitämiseen.'
                }
              </WhiteTypography>
            </Paper>
          </Grid>
          <Grid item xs={12} >
            <Paper
              className="text-car text-white"
              elevation={3}
              style={{ backgroundColor: '#0007' }}
            >
              <WhiteTypography variant="h5" gutterBottom>
                {'Yhteistyössä: '}
              </WhiteTypography>
              <img className="logo" src={logo} />
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Grid container className="green">
        <Grid item xs={12} md={6} className="part1">
          Part1
        </Grid>
        <Grid item xs={12} md={6}>
          Part2
        </Grid>
      </Grid>
      <div className="blue" />
      <div className="orange" />
    </div>
  )
}
export default LandingPage

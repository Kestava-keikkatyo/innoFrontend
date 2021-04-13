import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

const WhiteTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography)

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className="landing-banner" />
      </div>
      <Card
        className="text-card"
        variant="outlined"
        style={{ backgroundColor: 'black' }}
      >
        <CardContent>
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
        </CardContent>
      </Card>
      <Card
        className="logo-card"
        variant="outlined"
        style={{ backgroundColor: 'black' }}
      >
        <CardContent>
          <WhiteTypography variant="h5" gutterBottom>
            {'Yhteistyössä: '}
          </WhiteTypography>
        </CardContent>
      </Card>
      <div className="blank" />
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

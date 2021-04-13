import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'


const LandingPage = () => {

  return (
    <div>
      <div>
        <div className="landing-banner" />
      </div>
      <Card className="text-card" variant="outlined">
        <CardContent>
          <Typography align="center" variant="h1">KeikkaKaveri</Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default LandingPage

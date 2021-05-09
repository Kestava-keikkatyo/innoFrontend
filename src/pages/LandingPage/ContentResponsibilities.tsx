import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Spacing from '../../components/Spacing'

export interface ContentResponsibilitiesProps {}

const ContentResponsibilities: React.FC<ContentResponsibilitiesProps> = () => {
  return (
    <Container>
      <Spacing m5 p2 />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">Vastuualueet</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank" style={{ textDecoration: 'none' }}>
            <Button color="secondary" variant="contained">
              Lue lisää vastuualueista
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Spacing m5 />
      <Grid container className="landing-part3">
        <Grid item xs={12} md={4}>
          Part3
        </Grid>
        <Grid item xs={12} md={4}>
          Part4
        </Grid>
        <Grid item xs={12} md={4}>
          Part4
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContentResponsibilities

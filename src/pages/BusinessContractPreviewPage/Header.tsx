import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @component
 * @desc A header for preview page.
 */
const Header: React.FC = () => {
  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
            Business Contract Preview
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to="/business-contracts">Back</Link>
            </Button>
            <Button>
              <Link to="/business-contracts">Save</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Header
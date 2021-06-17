import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
//import {useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
//import { submitForm } from '../../actions/businessContractFormActions'
//import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A header for preview page.
 */
const PreviewHeader: React.FC<any> = () => {

  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
            Preview Contract Form
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to="/contracts/contract-form-manager">Back</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default PreviewHeader
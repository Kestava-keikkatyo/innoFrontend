import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



/**
 * @component
 * @desc A header for preview page.
 */
const FormPreviewHeader: React.FC<any> = () => {

  let backUrl:any = '/forms/newform'

  const location = useLocation();
  const pathname = location.pathname

  if(pathname === '/forms/edit-form/preview'){
    backUrl = '/forms/edit-form'
  }

  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
            Form Preview
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to={backUrl}>Back</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default FormPreviewHeader
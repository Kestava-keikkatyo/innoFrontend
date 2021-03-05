import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

const NewFormHeader = () => {
  return ( 
    <Grid container direction="row"
    justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary" >
          Form Creation
        </Typography>
      </Grid>
      <Grid item xs={6} >
        <Grid container direction="row-reverse">
          <Button>Import</Button>
          <Button>Export</Button>
          <Button>Preview</Button>
          <Button>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
   );
}
 
export default NewFormHeader;
import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { importForm } from '../../actions/formActions';
import FileUploader from '../../components/FileUploader';

const NewFormHeader = () => {
  const { currentForm } = useSelector(state => state.form)
  const dispatch = useDispatch()
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
          <Button>Preview</Button>
          <Button>Submit</Button>
          <FileUploader accept="data:text/json" handleFile={(data) => dispatch(importForm(data))}>
            Import
          </FileUploader>
          <Button download={`${currentForm.title}.json`}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(currentForm)
            )}`} >
            Export
          </Button>
        </Grid>
      </Grid>
    </Grid>
   );
}
 
export default NewFormHeader;
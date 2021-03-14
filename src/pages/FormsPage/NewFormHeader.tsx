import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { importForm } from '../../actions/formActions';
import FileUploader from '../../components/FileUploader';

const NewFormHeader: React.FC = () => {
  const { currentForm } = useSelector((state: any) => state.form)
  const dispatch = useDispatch()
  return ( 
    <Grid container direction="row"
    justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary" >
          Form Editor
        </Typography>
      </Grid>
      <Grid item xs={6} >
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/forms/newform/preview">Preview</Link>
          </Button>
          <Button>
            Submit
          </Button>
          <FileUploader accept="data:text/json" handleFile={(data: any) => dispatch(importForm(data))}>
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
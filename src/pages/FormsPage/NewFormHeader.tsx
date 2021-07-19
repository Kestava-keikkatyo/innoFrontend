import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { importFormByPath, submitForm } from '../../actions/formActions';
import FileUploader from '../../components/FileUploader';

/**
 * @component
 * @desc Form editors header.
 */
const NewFormHeader: React.FC = () => {
  const currentForm = useSelector((state: any) => state.form);
  const history = useHistory();
  const { title } = currentForm;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitForm(currentForm));
    history.push('/forms');
  };
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary">
          Create a new Form
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/forms">Back</Link>
          </Button>
          <Button>
            <Link to="/forms/newform/preview">Preview</Link>
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
          <FileUploader
            name="Import"
            accept="data:text/json"
            handleFile={(data: any) => dispatch(importFormByPath())}
          />

          <Button
            download={`${title}.json`}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(currentForm)
            )}`}
          >
            Export
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewFormHeader;

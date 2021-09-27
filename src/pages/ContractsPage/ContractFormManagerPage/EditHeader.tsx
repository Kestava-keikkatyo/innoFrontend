import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateBusinessContractForm } from '../../../actions/businessContractFormActions';
import { IRootState } from '../../../utils/store';

/**
 * @component
 * @desc A header for preview page.
 */
const EditHeader: React.FC<any> = () => {
  const currentBusinssContractForm = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSave = () => {
    console.log('### currentBusinssContractForm', currentBusinssContractForm);
    dispatch(
      updateBusinessContractForm(
        currentBusinssContractForm._id,
        currentBusinssContractForm
      )
    );
    history.push(`/contracts/contract-form-manager`);
  };

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary">
          Edit Contract Form
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/contracts/contract-form-manager">Back</Link>
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditHeader;

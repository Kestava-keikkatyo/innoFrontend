import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { submitForm } from '../../actions/businessContractFormActions';
import { IRootState } from '../../utils/store';

/**
 * @component
 * @desc A header for preview page.
 */
const SubmitHeader: React.FC<any> = () => {
  const currentBusinssContractForm = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  const dispatch = useDispatch();

  const history: any = useHistory();

  const handleSubmit = () => {
    const copyOfCurrentBusinssContractForm = {
      ...currentBusinssContractForm,
      filled: true,
    };
    dispatch(
      submitForm(
        copyOfCurrentBusinssContractForm,
        history.location.state.contractId
      )
    );

    history.push({
      pathname: `/business-contracts`,
      state: { isSubmitted: true },
    });
  };

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary">
          Fill Business Contract Form
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/business-contracts">Back</Link>
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubmitHeader;

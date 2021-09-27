import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateBusinessContractForm } from '../../../actions/businessContractFormActions';
import { IRootState } from '../../../utils/store';
import { useTranslation } from 'react-i18next';
/**
 * @component
 * @desc A header for preview page.
 */
const EditHeader: React.FC<any> = () => {
  const currentBusinssContractForm = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  const { t } = useTranslation();

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
          {t('edit_contract_form')}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/contracts/contract-form-manager">{t('back')}</Link>
          </Button>
          <Button onClick={handleSave}>{t('save')}</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditHeader;

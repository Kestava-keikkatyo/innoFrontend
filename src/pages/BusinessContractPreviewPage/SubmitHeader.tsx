import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { submitForm } from '../../actions/businessContractFormActions';
import { IRootState } from '../../utils/store';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc A header for preview page.
 */
const SubmitHeader: React.FC<any> = () => {
  const currentBusinssContractForm = useSelector(
    (state: IRootState) => state.businessContractForm
  );
  const { t } = useTranslation()
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
        {t("fill_business_contract_form")} 
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/business-contracts">{t('back')}</Link>
          </Button>
          <Button onClick={handleSubmit}>{t('submit')}</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubmitHeader;

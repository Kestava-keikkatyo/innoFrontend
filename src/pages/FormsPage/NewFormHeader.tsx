import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { importFormByPath, submitForm } from '../../actions/formActions';
import FileUploader from '../../components/FileUploader';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Form editors header.
 */
const NewFormHeader: React.FC = () => {
  const currentForm = useSelector((state: any) => state.form);
  const history = useHistory();
  const { title } = currentForm;
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const handleSubmit = () => {
    dispatch(submitForm(currentForm));
    history.push('/forms');
  };
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={6}>
        <Typography variant="h4" color="secondary">
        {t("create_new_form")}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button>
            <Link to="/forms"> {t("back")}</Link>
          </Button>
          <Button>
            <Link to="/forms/newform/preview"> {t("preview")}</Link>
          </Button>
          <Button onClick={handleSubmit}> {t("submit")}</Button>
          <FileUploader
            name={t('import')}
            accept="data:text/json"
            handleFile={(data: any) => dispatch(importFormByPath())}
          />

          <Button
            download={`${title}.json`}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(currentForm)
            )}`}
          >
             {t("export")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewFormHeader;

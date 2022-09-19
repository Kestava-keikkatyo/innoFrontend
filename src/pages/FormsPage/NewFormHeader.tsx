import { Button, Grid, Typography } from '@mui/material';
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
    <Grid container direction="row" alignItems="self-end" >
      <Grid item xs={12} sm={4} md={6}>
        <Typography variant="h1" color="secondary" className='header'>
        {t("create_new_form")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Grid container style={{justifyContent: "end"}}>
          <Button className='form-button'
            color='primary'
            variant='outlined'
            download={`${title}.json`}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(currentForm)
            )}`}
          >
             {t("export")}
          </Button>
          <div className='form-button'>
            <FileUploader
            name={t('import')}
            accept="data:text/json"
            handleFile={(data: any) => dispatch(importFormByPath())}/>
          </div>
          <Button className='form-button' color='primary' variant='outlined' onClick={handleSubmit}> {t("submit")}</Button>
          <Button className='form-button' color='primary' variant='outlined'>
            <Link className='button-text' to="/forms/newform/preview"> {t("preview")}</Link>
          </Button>
          <Button className='form-button' color='primary' variant='outlined'>
            <Link className='button-text' to="/forms"> {t("back")}</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewFormHeader;

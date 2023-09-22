import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
//import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import { submitForm } from '../../actions/businessContractFormActions'
//import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc A header for preview page.
 */
const PreviewHeader: React.FC<any> = () => {
  const { t } = useTranslation()
  return (
    <Grid container direction='row' justifyContent='space-between'>
      <Grid item xs={6}>
        <Typography variant='h4' color='secondary'>
          {t('preview_business_contract_form')}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction='row-reverse'>
          <Button>
            <Link to='/business-contracts'>{t('back')}</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PreviewHeader

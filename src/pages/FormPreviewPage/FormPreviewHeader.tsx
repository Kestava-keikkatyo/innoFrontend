import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

/**
 * @component
 * @desc A header for preview page.
 */
const FormPreviewHeader: React.FC<any> = () => {
  const { t } = useTranslation()
  let backUrl:any = '/forms/newform'

  const location = useLocation();
  const pathname = location.pathname

  if(pathname === '/forms/edit-form/preview'){
    backUrl = '/forms/edit-form'
  }else if (pathname === '/forms/preview'){
    backUrl = '/forms'
  }

  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
            {t('form_preview')}
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to={backUrl}>{t('back')}</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default FormPreviewHeader
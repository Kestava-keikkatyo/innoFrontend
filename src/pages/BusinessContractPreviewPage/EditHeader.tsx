import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { updateBusinessContractForm } from '../../actions/businessContractFormActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A header for preview page.
 */
const EditHeader: React.FC<any> = () => {
  const currentBusinssContractForm = useSelector((state: IRootState) => state.businessContractForm)

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const history = useHistory()

  const handleSave = () => {
    const copyOfCurrentBusinssContractForm = {
      ...currentBusinssContractForm,
      filled: true,
    }
    dispatch(
      updateBusinessContractForm(
        copyOfCurrentBusinssContractForm._id,
        copyOfCurrentBusinssContractForm,
      ),
    )
    history.push(`/business-contracts`)
  }

  return (
    <Grid container direction='row' justifyContent='space-between'>
      <Grid item xs={6}>
        <Typography variant='h4' color='secondary'>
          {t('edit_filled')}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction='row-reverse'>
          <Button>
            <Link to='/business-contracts'>{t('back')}</Link>
          </Button>
          <Button onClick={handleSave}>{t('save')}</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EditHeader

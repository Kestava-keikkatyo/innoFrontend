import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { submitEditedForm } from '../../actions/businessContractFormActions'
import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc A header for preview page.
 */
const EditHeader: React.FC<any> = () => {

  const { t } = useTranslation()

  const currentBusinssContractForm = useSelector((state: IRootState) => state.businessContractForm)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleSave = () => {
    console.log("currentBusinssContractForm", currentBusinssContractForm)
    dispatch(submitEditedForm(currentBusinssContractForm._id, currentBusinssContractForm))
    history.push(`/business-contracts`)

  }


  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
        {t('edit_filled')}
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to="/business-contracts">{t("back")}</Link>
            </Button>
            <Button onClick={handleSave}>
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default EditHeader
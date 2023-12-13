import React, { useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Close as CloseIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addContract } from '../../actions/contractActions'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  selectDiv: {
    marginTop: 16,
    '& .MuiTextField-root': { m: 1, minWidth: '25ch' },
  },
}))

/**
 * @component
 * @desc A modal panel where worker or business can send contract request to agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {worker} props.workerData data of the added worker.
 */
const CooperationInfoModal: React.FC<any> = ({ displayModal, closeModal, agency, contractId }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const agencyId = agency._id
  const { t } = useTranslation()
  const [formId, setFormId] = React.useState('None')

  const addNewContract = async () => {
    dispatch(addContract(agencyId, formId, 'request'))
    dispatch(setAlert(`Success: Contract request sent to ${agency.name}`, severity.Success))
    closeModal()
  }

  return (
    <Dialog disableEnforceFocus open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>{t('send_cooperation_request')}</Typography>
          <IconButton onClick={closeModal} size='large'>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {agency && (
          <div>
            <Typography variant='subtitle1'>{t('agency_info')}:</Typography>
            <Typography color='textSecondary' variant='body2'>
              {t('agency_name')}: {agency.name} <br />
              {t('agency_email')}: {agency.email} <br />
              {t('agency_category')}: {agency.category} <br />
            </Typography>
          </div>
        )}

        <div className={classes.selectDiv}>
          <Typography variant='subtitle1'>Tähän vapaa tekstikenttä?</Typography>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
      <DialogActions style={{ marginBottom: 10 }}>
        <Button color='primary' variant='contained' onClick={addNewContract}>
          {t('send_contract')}
        </Button>
        <Button color='primary' variant='outlined' onClick={() => closeModal()}>
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CooperationInfoModal

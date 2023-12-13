import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAgencyConnection } from '../../services/codeService'
import { Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import makeStyles from '@mui/styles/makeStyles'
import i18next from 'i18next'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'

export const InvitationCodeInput = () => {
  const [code, setCode] = useState('')
  const { data, ...user } = useSelector((state: any) => state.user)

  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCode = e.target.value
    if (inputCode.length <= 5) {
      setCode(inputCode)
    }
  }

  const handleSubmit = async () => {
    if (code.length === 5) {
      try {
        await addAgencyConnection(code)
        dispatch(setAlert(i18next.t('invitecode_input_successful'), severity.Success))
      } catch (error) {
        dispatch(setAlert(i18next.t('invitecode_input_failed'), severity.Error))
      }
    } else {
      dispatch(setAlert(i18next.t('invitecode_input_failed'), severity.Error))
    }
    setCode('')
  }

  return (
    <div>
      <Typography>{t('invitation_code')}</Typography>
      <input
        className={classes.invitationCodeField}
        value={code}
        onChange={handleChange}
        maxLength={5}
      />
      <Button type='submit' variant='contained' color='primary' onClick={handleSubmit}>
        {t('submit')}
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  invitationCodeField: {
    padding: '9px',
    paddingBottom: '10px',
    marginRight: '5px',
    marginTop: '3px',
  },
}))

export default InvitationCodeInput

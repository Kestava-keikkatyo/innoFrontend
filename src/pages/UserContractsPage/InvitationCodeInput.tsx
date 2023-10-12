import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addAgencyConnection } from '../../services/codeService'
import { Typography, Button, FormControl } from '@mui/material'
import { useTranslation } from 'react-i18next'
import makeStyles from '@mui/styles/makeStyles'
import { Field } from 'formik'

export const InvitationCodeInput = () => {
  const [code, setCode] = useState('')
  const { data, ...user } = useSelector((state: any) => state.user)
  const initialValues = { receivedCode: code }

  const { t } = useTranslation()
  const classes = useStyles()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCode = e.target.value
    if (inputCode.length <= 5) {
      setCode(inputCode)
    }
  }

  const handleSubmit = () => {
    if (code.length === 5) {
      addAgencyConnection(code)
    } else {
      alert('Please enter a 5-character invitation code.')
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
    marginRight: '5px',
    marginTop: '2px',
  },
}))

export default InvitationCodeInput

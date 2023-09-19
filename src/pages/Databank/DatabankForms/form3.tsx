import React from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import { Checkbox } from '@mui/material'

{
  /*LOMAKE 3 – TYÖNOPASTUS (käyttäjäyrityksen työnopastaja täyttää)*/
}
const Form3: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div style={{ padding: '100px' }}>
      <h2>{t('form3Header')}</h2>
      <div>
        <p>{t('form3Text1')}</p>
        <p>{t('form3Text2')}</p>
        <Box>
          <h4>{t('form3Text3')}:</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
        </Box>
        <Box>
          <h4>{t('date')}:</h4>
          <TextField size='small' style={{ width: '400px' }}></TextField>
        </Box>
        <Box>
          <h4>{t('worker')}:</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
        </Box>
        <h4>{t('form3Text4')}:</h4>
        <Box>
          <label>
            <Checkbox />
            {t('form3Check1')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check2')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check3')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check4')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check5')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check6')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check7')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check8')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check9')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check10')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check11')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check12')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check13')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check14')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check15')}
          </label>
          <label>
            <Checkbox />
            {t('form3Check16')}
          </label>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
          <Box>
            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
          <Box>
            <h4>{t('workRoomPlace')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
        </Box>
        <h4>{t('form3Text5')}:</h4>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
          <Box>
            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
          <Box>
            <h4>{t('workRoomPlace')}:</h4>
            <TextField size='small' style={{ width: '500px' }}></TextField>
          </Box>
        </Box>
        <h4>{t('signatures')}</h4>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('orientator')}:</h4>
            <TextField id='standard-basic' variant='standard' style={{ width: '500px' }} />
          </Box>
          <Box>
            <h4>{t('orientated')}:</h4>
            <TextField id='standard-basic' variant='standard' style={{ width: '500px' }} />
          </Box>
        </Box>
      </div>
    </div>
  )
}
export default Form3

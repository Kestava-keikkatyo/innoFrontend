import React from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import { Checkbox, TextField } from '@mui/material'

{
  /*LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT*/
}
const Form1: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div style={{ padding: '100px' }}>
      <h2>{t('form1Header')}</h2>
      <div>
        <p>{t('form1Text1')}</p>
        <Box>
          <h4>{t('rentalCompany')}:</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
          <h4>{t('userCompany')}:</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Checkbox />
          {t('form1Check1')}
        </Box>
        <Box>
          <h4>{t('form1Text2')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4>{t('form1Text3')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4 style={{ marginTop: '250px' }}>{t('form1Text4')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4>{t('form1Text5')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4>{t('form1Text6')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4 style={{ marginTop: '350px' }}>{t('form1Text7')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4>{t('form1Text8')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
        </Box>
        <h4 style={{ marginTop: '40px' }}>{t('form1Text9')}:</h4>
        <h4>{t('contactInformation')}:</h4>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('workRoom')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <h4>{t('contactInformation')}:</h4>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
          <Box style={{ marginRight: '30px' }}>
            <h4>{t('workRoom')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <Box>
          <h4 style={{ marginTop: '200px' }}>{t('form1Text10')}:</h4>
          <label style={{ whiteSpace: 'nowrap' }}>
            <Checkbox />
            {t('form1Check2')}
          </label>
          <label style={{ whiteSpace: 'nowrap' }}>
            <Checkbox />
            {t('form1Check3')}
          </label>
          <label style={{ whiteSpace: 'nowrap' }}>
            <Checkbox />
            {t('form1Check4')}
          </label>
          <label style={{ whiteSpace: 'nowrap' }}>
            <Checkbox />
            {t('form1Check5')}
          </label>
          <Box style={{ marginBottom: '30px' }}>
            <h4>{t('form1ByDate')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <Box>
          <h4 style={{ marginBottom: '30px' }}>{t('form1Text11')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
        </Box>
        <h4>{t('form1Text12')}</h4>
        <Box>
          <Box>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
        <h4>{t('form1Text13')}</h4>
        <Box>
          <Box>
            <h4>{t('name')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />

            <h4>{t('user_phone_number')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />

            <h4>{t('email')}:</h4>
            <TextField size='small' style={{ width: '500px' }} />
          </Box>
        </Box>
      </div>
    </div>
  )
}
export default Form1

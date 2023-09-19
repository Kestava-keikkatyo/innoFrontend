import React from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import { Checkbox } from '@mui/material'

{
  /*LOMAKE 4 – TOIMINNAN ARVIOINTI*/
}
const Form4: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div style={{ padding: '100px' }}>
      <h2>{t('form4Header')}</h2>
      <div>
        <p>{t('form4Text1')}</p>
        <p>{t('form4Text2')}</p>
        <h4>{t('form4Text3')}:</h4>
        <Box>
          <Checkbox />
          {t('form4Check1')}
          <br></br>
          <Checkbox />
          {t('form4Check2')}
          <br></br>
          <Checkbox />
          {t('form4Check3')}
          <br></br>
          <Checkbox />
          {t('form4Check4')}
          <br></br>
          <Checkbox />
          {t('form4Check5')}
          <br></br>
          <Checkbox />
          {t('form4Check6')}
          <br></br>
          <Checkbox />
          {t('form4Check7')}
          <br></br>
          <Checkbox />
          {t('form4Check8')}
          <br></br>
          <Checkbox />
          {t('form4Check9')}
          <br></br>
          <h4>{t('form4Text4')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4 style={{ marginTop: '400px' }}>{t('form4Text5')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
          <h4>{t('form4Text6')}:</h4>
          <h4>{t('rentalCompanyCaps')}</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
          <h4>{t('userCompanyCaps')}</h4>
          <TextField id='standard-basic' variant='standard' fullWidth />
          <h4>{t('cooperation')}</h4>
          <Box sx={{ border: 1, height: '400px' }} />
        </Box>
      </div>
    </div>
  )
}
export default Form4

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Ingressi: React.FC<any> = ({ header, summary }) => {
  const { t } = useTranslation()
  return (
    <Grid sx={{ width: { xs: '90%', md: '60%' } }} style={{ margin: 'auto' }}>
      <Typography style={{ fontWeight: 'bold' }} className='header2'>
        {t(header)}
      </Typography>
      <Typography style={{ padding: '30px 0px 30px 0px' }}>{t(summary)}</Typography>
    </Grid>
  )
}
export default Ingressi

import React from 'react'
import { Grid, Container, Typography, createTheme, ThemeProvider } from '@mui/material'
import email from '../../assets/email.svg'
import link_out from '../../assets/linkki_ulos.svg'
import footer_logo from '../../assets/logo_keikkakaveri_footteri.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Landing page footer
const Footer = () => {
  const { t } = useTranslation()

  const fontTheme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      body1: {
        color: '#2C2C2C',
      },
    },
  })

  return (
    <ThemeProvider theme={fontTheme}>
      <Container
        style={{
          backgroundColor: '#C0CFFA',
          maxWidth: 'none',
          paddingTop: '32px',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Grid container spacing={4} style={{ maxWidth: '1170px' }}>
          <Grid className='content-center' item xs={12} sm={12} md={4}>
            <img
              src={footer_logo}
              alt='Keikkakaveri logo'
              style={{ maxWidth: '200px', marginBottom: '8px' }}
            ></img>
            <Typography>{t('keikkakaveri_info')}</Typography>
          </Grid>
          <Grid className='content-center' item xs={12} sm={12} md={4}>
            <div className='content-center' style={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                to='/databank/lifeline'
                style={{ textDecoration: 'none', maxWidth: 'fit-content' }}
              >
                <Typography>{t('databank_link')}</Typography>
              </Link>
              <Link to='/login' style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                <Typography style={{ marginTop: '8px' }}>{t('keikkakaveri_tool_link')}</Typography>
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <img
                  src={email}
                  alt='Email icon'
                  style={{ width: 'auto', height: '24px', marginRight: '8px' }}
                ></img>
                <Typography>info (at) keikkakaveri.fi</Typography>
              </div>
            </div>
          </Grid>
          <Grid className='content-center' item xs={12} sm={12} md={4}>
            <div className='content-center' style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={link_out}
                  alt='Link out icon'
                  style={{ width: 'auto', height: '24px', marginRight: '8px' }}
                ></img>
                <a
                  href='https://www.metropolia.fi/fi/tutkimus-kehitys-ja-innovaatiot/hankkeet/kestava-keikkatyo-hanke'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'none' }}
                >
                  <Typography>Kestävä keikkatyö</Typography>
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <img
                  src={link_out}
                  alt='Link out icon'
                  style={{ width: 'auto', height: '24px', marginRight: '8px' }}
                ></img>
                <a
                  href='https://ttk.fi/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'none' }}
                >
                  <Typography>{t('centre_occupational_safety')}</Typography>
                </a>
              </div>
              {/* Links to privacy policy and accessibility statement will be added later */}
              <Typography style={{ marginTop: '8px' }}>{t('privacy_policy_link')}</Typography>
              <Typography style={{ marginTop: '8px' }}>
                {t('accessibility_statement_link')}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Typography
        style={{
          textAlign: 'center',
          fontSize: '12px',
          backgroundColor: '#C0CFFA',
          padding: '16px 0 16px 0',
        }}
      >
        © 2023 Keikkakaveri
      </Typography>
    </ThemeProvider>
  )
}

export default Footer

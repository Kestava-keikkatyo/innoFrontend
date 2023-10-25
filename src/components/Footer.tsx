import { Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import linkout from '../assets/icons/linkkiulos.svg'
import email from '../assets/icons/email.svg'
import logo_text from '../../src/assets/logo_keikkakaveri_navbar.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: '#2C2C2C',
        textTransform: 'uppercase',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: '#C0CFFA',
          paddingTop: '32px',
          paddingBottom: '32px',
          display: 'grid',
          flexDirection: 'column',
        }}
      >
        {/* Footer left row */}
        <Grid
          container
          spacing={2}
          sx={{
            width: { xs: '90%', md: '60%' },
            display: 'flex',
            flexDirection: 'row',
            justifySelf: 'center',
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <img
              src={logo_text}
              alt='Keikkakaveri logo'
              style={{ maxWidth: '200px', marginBottom: '8px' }}
            ></img>
            <Typography sx={{ textTransform: 'none' }}>{t('keikkakaveri_summary')}</Typography>
          </Grid>

          {/* Footer middle row */}
          <Grid item xs={12} sm={12} md={4}>
            <Link to='/databank/lifeline' style={{ textDecoration: 'none' }}>
              <Typography sx={{ fontWeight: 'bold' }}>{t('databank')}</Typography>
            </Link>
            <Link to='/databank/lifeline' style={{ textDecoration: 'none' }}>
              <Typography>{t('stages_of_work')}</Typography>
            </Link>
            <Link to='/databank/responsibilities' style={{ textDecoration: 'none' }}>
              <Typography>{t('work_responsibilities')}</Typography>
            </Link>
            <Link to='/databank/instructions' style={{ textDecoration: 'none' }}>
              <Typography>{t('instructions')}</Typography>
            </Link>
            <Link to='/databank/best-practices' style={{ textDecoration: 'none' }}>
              <Typography>{t('good_practices')}</Typography>
            </Link>
            <Link to='/databank/faq' style={{ textDecoration: 'none' }}>
              <Typography>{t('rwm_forms')}</Typography>
            </Link>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <Typography sx={{ marginTop: '8px' }}>{t('keikkakaveri_tool_link')}</Typography>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <img
                src={email}
                alt='Email icon'
                style={{ width: 'auto', height: '24px', marginRight: '8px' }}
              ></img>
              <Typography sx={{ textTransform: 'none' }}>info (at) keikkakaveri.fi</Typography>
            </div>
          </Grid>

          {/* Footer right row */}
          <Grid item xs={12} sm={12} md={4}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={linkout}
                  alt='Link out'
                  style={{ width: 'auto', height: '24px', marginRight: '8px' }}
                ></img>
                <a
                  href='https://www.metropolia.fi/fi/tutkimus-kehitys-ja-innovaatiot/hankkeet/kestava-keikkatyo-hanke'
                  style={{ textDecoration: 'none' }}
                >
                  <Typography sx={{ textTransform: 'none' }}>Kestävä keikkatyö</Typography>
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <img
                  src={linkout}
                  alt='Link out'
                  style={{ width: 'auto', height: '24px', marginRight: '8px' }}
                ></img>
                <a href='https://ttk.fi/' style={{ textDecoration: 'none' }}>
                  <Typography sx={{ textTransform: 'none' }}>
                    {t('centre_occupational_safety')}
                  </Typography>
                </a>
              </div>
              <Typography sx={{ marginTop: '8px', textTransform: 'none' }}>
                {t('privacy_policy_link')}
              </Typography>
              <Typography sx={{ marginTop: '8px', textTransform: 'none' }}>
                {t('accessibility_statement_link')}
              </Typography>
            </div>
          </Grid>
        </Grid>
        {/* Footer bottom text */}
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '12px',
            backgroundColor: '#C0CFFA',
            padding: '16px 0 16px 0',
          }}
        >
          © {new Date().getFullYear() || ''} Keikkakaveri
        </Typography>
      </Container>
    </ThemeProvider>
  )
}
export default Footer

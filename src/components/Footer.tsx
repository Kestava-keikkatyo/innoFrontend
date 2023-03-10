import { Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import linkout from '../assets/icons/linkkiulos.svg';
import email from '../assets/icons/email.svg';
import logo_text from '../../src/assets/logo_keikkakaveri_navbar.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC<any> = ({ }) => {

  const { t } = useTranslation()
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: "#2C2C2C"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: 'white', paddingTop: '15px' }}>
        <Container style={{ backgroundColor: '#EFEFEF', maxWidth: 'none', paddingTop: '32px', paddingBottom: '32px', justifyContent: 'center', display: 'flex' }}>

          {/* Footer left row */}
          <Grid container spacing={4} sx={{ width: { xs: '90%', md: '60%' } }}>
            <Grid className='content-center' item xs={12} sm={12} md={4} style={{ paddingLeft: '0' }}>
              <img src={logo_text} alt='Keikkakaveri logo' style={{ maxWidth: '200px', marginBottom: '8px' }}></img>
              <Typography>{t('keikkakaveri_summary')}</Typography>
            </Grid>

            {/* Footer middle row */}
            <Grid className='content-center' item xs={12} sm={12} md={4} style={{ paddingLeft: '0' }}>
              <div className='content-center' style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/databank" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('databank')}</Typography>
                </Link>
                <Link to="/databank/lifeline" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('stages_of_work')}</Typography>
                </Link>
                <Link to="/databank/responsibilities" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('work_responsibilities')}</Typography>
                </Link>
                <Link to="/databank/instructions" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('instructions')}</Typography>
                </Link>
                <Link to="/databank/best-practices" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('good_practices')}</Typography>
                </Link>
                <Link to="/databank/faq" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ textTransform: 'uppercase' }}>{t('rwm_forms')}</Typography>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none', maxWidth: 'fit-content' }}>
                  <Typography style={{ marginTop: '8px' }}>{t('keikkakaveri_tool_link')}</Typography>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <img src={email} alt='Email icon' style={{ width: 'auto', height: '24px', marginRight: '8px' }}></img>
                  <Typography>info (at) keikkakaveri.fi</Typography>
                </div>
              </div>
            </Grid>

            {/* Footer right row */}
            <Grid className='content-center' item xs={12} sm={12} md={4} style={{ paddingLeft: '0' }}>
              <div className='content-center' style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={linkout} alt='Link out' style={{ width: 'auto', height: '24px', marginRight: '8px' }}></img>
                  <a href="https://www.metropolia.fi/fi/tutkimus-kehitys-ja-innovaatiot/hankkeet/kestava-keikkatyo-hanke" style={{ textDecoration: 'none' }}>
                    <Typography>Kestävä keikkatyö</Typography>
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <img src={linkout} alt='Link out' style={{ width: 'auto', height: '24px', marginRight: '8px' }}></img>
                  <a href="https://ttk.fi/" style={{ textDecoration: 'none' }}>
                    <Typography>{t('centre_occupational_safety')}</Typography>
                  </a>
                </div>
                <Typography style={{ marginTop: '8px' }}>{t('privacy_policy_link')}</Typography>
                <Typography style={{ marginTop: '8px' }}>{t('accessibility_statement_link')}</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>

        {/* Footer bottom text */}
        <Typography style={{ textAlign: 'center', fontSize: '12px', backgroundColor: '#EFEFEF', padding: '16px 0 16px 0' }}>
          © 2023 Keikkakaveri
        </Typography>
      </div>
    </ThemeProvider>
  )
};
export default Footer;

import { Container, Typography, Grid, Button } from '@mui/material'
import React from 'react'
import eu from '../../assets/partners/EU_ESR_FI_vertical_20mm_rgb_109x100px.svg'
import kkk from '../../assets/partners/A1_KK__rgb_131x154px.svg'
import vipuvoima from '../../assets/partners/VipuvoimaaEU_2014_2020_rgb_110x74px.svg'
import ttk from '../../assets/partners/TTK_pysty_SU_116x89.svg'
import left_box_image from '../../assets/keikkakaveri_työväline_kuvitus.svg'
import right_box_image from '../../assets/keikkakaveri_tietopankki_kuvitus.svg'
import { useTranslation } from 'react-i18next'
import Spacing from '../../components/Spacing'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const FirstLandingPage: React.FC = () => {
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
      <Container className='background'>
        <Spacing m3 p2 />
        <div className='landing-bg-dark intro-container'>
          <Typography className='text-center landing-text'>{t('slogan')}</Typography>
          <Typography className='text-center landing-text2'>{t('intro')}</Typography>
        </div>
        <Grid
          container
          spacing={4}
          sx={{ flexWrap: { xs: 'wrap', sm: 'wrap' } }}
          style={{ paddingTop: '32px' }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundClip: 'content-box',
              backgroundColor: '#FDFDFD',
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            <Grid
              sx={{ boxShadow: 1, display: 'flex', flexDirection: 'column' }}
              style={{ textAlign: 'center', paddingTop: '20px', height: '100%' }}
            >
              <Container style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '24px' }}>
                {t('left_box_header')}
              </Container>
              <Container style={{ marginBottom: '10px' }}>{t('left_box_content')}</Container>
              <Link to='/login'>
                <Button
                  style={{
                    border: '3px solid #F47D20',
                    borderRadius: '20px',
                    color: '#2C2C2C',
                    width: '90%',
                    fontWeight: 'bold',
                  }}
                >
                  {t('enable_button')}
                </Button>
              </Link>
              <div style={{ marginTop: 'auto' }}>
                <img
                  src={left_box_image}
                  alt='Keikkakaveri-työvälineen kuvitus'
                  style={{ display: 'block', margin: '0' }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundClip: 'content-box',
              backgroundColor: '#FDFDFD',
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            <Grid
              sx={{ boxShadow: 1, display: 'flex', flexDirection: 'column' }}
              style={{ textAlign: 'center', paddingTop: '20px', height: '100%' }}
            >
              <Container style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '24px' }}>
                {t('right_box_header')}
              </Container>
              <Container style={{ marginBottom: '10px' }}>{t('right_box_content')}</Container>
              <Link to='/databank/lifeline'>
                <Button
                  style={{
                    border: '3px solid #F47D20',
                    borderRadius: '20px',
                    color: '#2C2C2C',
                    width: '90%',
                    fontWeight: 'bold',
                  }}
                >
                  {t('databank_button')}
                </Button>
              </Link>
              <div style={{ marginTop: 'auto' }}>
                <img
                  src={right_box_image}
                  alt='Tietopankkikuvitus'
                  style={{ display: 'block', margin: '0' }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          alignItems='baseline'
          style={{ paddingTop: '32px', paddingBottom: '32px' }}
        >
          <Grid item xs={3} sm={3} style={{ maxWidth: '120px', display: 'flex' }}>
            <img src={ttk} alt='Työturvallisuuskeskus' />
          </Grid>
          <Grid item xs={3} sm={3} style={{ maxWidth: '120px', display: 'flex' }}>
            <img src={kkk} alt='Kestävä Keikkatyö' />
          </Grid>
          <Grid item xs={3} sm={3} style={{ maxWidth: '120px', display: 'flex' }}>
            <img src={vipuvoima} alt='Vipuvoimaa EU:lta' />
          </Grid>
          <Grid item xs={3} sm={3} style={{ maxWidth: '120px', display: 'flex' }}>
            <img src={eu} alt='Euroopan Unionin sosiaalirahasto' />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default FirstLandingPage

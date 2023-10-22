import React from 'react'
import { CardMedia, Grid } from '@mui/material'
import picture from '../../assets/pictures/Kirjautuminen_etusivu_Keikkakaveri_tyovaline_kuvitus.svg'

const Header: React.FC<{ welcomeText: string }> = ({ welcomeText }) => {
  return (
    <Grid
      style={{
        marginBottom: '20px',
        backgroundImage: 'linear-gradient(to bottom, #FDFDFD, #FDFDFD 30%, #C0CFFA 30%)',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <Grid sx={{ width: { md: '35%', sm: '50%', xs: '90%' }, alignSelf: 'end' }}>
        <CardMedia component='img' image={picture} />
      </Grid>
      <Grid
        item
        sx={{ visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' } }}
        style={{
          display: 'flex',
          paddingRight: '50px',
          textTransform: 'uppercase',
          alignItems: 'flex-end',
        }}
      >
        <h2>{welcomeText}</h2>
      </Grid>
    </Grid>
  )
}

export default Header

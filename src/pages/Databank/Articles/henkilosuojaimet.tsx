import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const Article9 = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        Vastuu vuokratyöntekijän tarvitsemista henkilösuojaimista ja niiden hankkimisesta on sekä
        henkilöstöpalveluyrityksellä että käyttäjäyrityksellä.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Henkilönsuojaimen on suojattava vaaroilta, joita varten se on tarkoitettu, sovittava sitä
        käyttävälle työntekijälle, eikä suojaimen käyttö saa aiheuttaa vaaraa. Ensisijaisesti vaarat
        poistetaan työhön tai työolosuhteisiin kohdistuvilla toimenpiteillä. Jos vaaroja ei pystytä
        muuten poistamaan tai vähentämään tarpeeksi, käytetään henkilönsuojaimia.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen ja käyttäjäyrityksen tulee keskenään sopia tarvittavien
        henkilösuojaimien hankkimisesta vuokratyöntekijöille. Myös henkilönsuojainten
        kunnossapidosta huolehtimisesta tulee sopia. Käyttäjäyrityksellä on yleinen
        vuokratyöntekijöiden valvontavastuu. Käyttäjäyrityksen tulee huolehtia siitä, että
        vuokratyöntekijä käyttää työssään tarvittavia henkilönsuojaimia ohjeiden mukaisesti.{' '}
      </Grid>
      <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 4 – TOIMINNAN ARVIOINTI{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työturvallisuuslaki 738/2002.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2002/20020738'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        {' '}
        https://www.finlex.fi/fi/laki/ajantasa/2002/20020738
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Valtioneuvoston asetus henkilönsuojainten valinnasta ja käytöstä työssä 427/2021.
      </Grid>
      <Link
        href='https://finlex.fi/fi/laki/alkup/2021/20210427'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        {' '}
        https://finlex.fi/fi/laki/alkup/2021/20210427
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Suojaimet työssä (Työsuojeluhallinto)
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoolot/suojaimet-tyossa'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.tyosuojelu.fi/tyoolot/suojaimet-tyossa
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
}))
export default Article9

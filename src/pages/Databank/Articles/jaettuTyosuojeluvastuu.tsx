import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'
import form1 from '../../assets/forms/form1.pdf'
import form2 from '../../assets/forms/form2.pdf'
import form3 from '../../assets/forms/form3.pdf'
import form4 from '../../assets/forms/form4.pdf'
import form5 from '../../assets/forms/form5.pdf'

const Article1 = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        Vuokratyö eroaa tavallisesta työsuhteesta siten, että kahden osapuolen sijaan vuokratyöhön
        liittyy kolme osapuolta: vuokratyöntekijä, henkilöstöpalveluyritys ja käyttäjäyritys.
        Henkilöstöpalveluyritys on vuokratyöntekijän varsinainen työnantaja, mutta
        vuokratyötoimeksiannossa myös käyttäjäyritykselle siirtyy vuokratyöntekijään kohdistuvia
        työnantajavelvollisuuksia. Käytännössä esihenkilö huolehtii näistä työnantajan
        velvollisuuksista työpaikalla.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Työsopimuslain mukaan käyttäjäyritykselle siirtyvät oikeus johtaa ja valvoa
        vuokratyöntekijän työntekoa sekä välittömästi työn tekemiseen ja sen järjestelyihin
        liittyvät työnantajan velvollisuudet. Käyttäjäyrityksen on toimitettava
        henkilöstöpalveluyritykselle ne tiedot, jotka se tarvitsee työnantajan velvoitteiden
        täyttämiseksi.
      </Grid>
      <Grid item className={classes.gridItem}>
        Työsopimuslain mukaan käyttäjäyritykselle siirtyvät oikeus johtaa ja valvoa
        vuokratyöntekijän työntekoa sekä välittömästi työn tekemiseen ja sen järjestelyihin
        liittyvät työnantajan velvollisuudet. Käyttäjäyrityksen on toimitettava
        henkilöstöpalveluyritykselle ne tiedot, jotka se tarvitsee työnantajan velvoitteiden
        täyttämiseksi.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Vuokratyöntekijän työturvallisuuden ja -hyvinvoinnin varmistaminen edellyttää
        etukäteissuunnittelua, asioista sopimista ja yhteistyötä kaikkien osapuolten kesken.{' '}
      </Grid>
      <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>
        Keikkakaverin sisäiset linkit
      </Grid>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työsopimuslaki 55/2001.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2001/20010055'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2001/20010055
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        {' '}
        Työturvallisuuslaki 738/2002.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2002/20020738'
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2002/20020738
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
}))
export default Article1
